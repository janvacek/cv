import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useUuidGenerator } from '~/src/Infrastructure/Uuid/UuidGenerator'
import { InputType } from '~/src/Model/Input/InputType'
import classNames from 'classnames'
import { useFormContext } from 'react-hook-form'

interface Props {
	name: string
	id?: string
	label?: string
	placeholder?: string
	type?: InputType
	inputClassName?: string
	wrapperClassName?: string
	onChange?: (input: string) => void
	onInputMounted?: (ref: any) => void
}

const defaultProps: Partial<Props> = {
	id: '',
	label: '',
	placeholder: '',
	type: InputType.TEXT,
	inputClassName: '',
	wrapperClassName: '',
}

export default function TextInput (props: Props) {
	const { generate } = useUuidGenerator()
	props = { ...defaultProps, ...props }
	const [id] = useState(props.id || generate())
	const { register, formState: { errors } } = useFormContext()
	const {ref, ...rest} = register(props.name, {
		onChange: (e) => {
			props.onChange?.(e.target.value)
		}
	})
	const inputRef = useRef()

	const sharedProps = useMemo(() => {
		return {
			id,
			placeholder: props.placeholder,
			className: classNames('form-control', props.inputClassName),
			...rest,
			ref: (e: any) => {
				ref(e)
				inputRef.current = e
			}
		}
	}, [id, props, ref, rest])

	useEffect(() => {
		props.onInputMounted?.(inputRef.current)
	}, [props])

	const textArea = <textarea {...sharedProps}></textarea>
	const input = <input type={props.type} {...sharedProps}/>

	return (
		<div className={classNames('form-floating', )}>
			<>
				{props.type === InputType.TEXTAREA ? textArea : input}
				{props.label && <label htmlFor={id}>{props.label}</label>}
				<span className="form-error">{errors?.[props.name]?.message as string}</span>
			</>
		</div>
	)
}
