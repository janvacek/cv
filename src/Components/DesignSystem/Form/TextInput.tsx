import { useMemo, useState } from 'react'
import { useUuidGenerator } from '~/src/Infrastructure/Uuid/UuidGenerator'
import { InputType } from '~/src/Model/Input/InputType'
import classNames from 'classnames'
import { FieldErrors } from 'react-hook-form'

interface Props {
	name: string
	id?: string
	label?: string
	placeholder?: string
	type?: InputType
	inputClassName?: string
	wrapperClassName?: string
	register?: any | null
	errors?: FieldErrors
}

const defaultProps: Partial<Props> = {
	id: '',
	label: '',
	placeholder: '',
	type: InputType.TEXT,
	inputClassName: '',
	wrapperClassName: '',
	register: null
}

export default function TextInput(props: Props) {
	const { generate } = useUuidGenerator()
	props = { ...defaultProps, ...props }
	const [id] = useState(props.id || generate())

	const sharedProps = useMemo(() => {
		return {
			id,
			name: props.name,
			placeholder: props.placeholder,
			className: classNames('form-control', props.inputClassName),
			...props.register
		}
	}, [id, props])

	const textArea = <textarea {...sharedProps}></textarea>
	const input = <input type={props.type} {...sharedProps}/>

	return (
		<div className={classNames('form-floating', )}>
			<>
				{props.type === InputType.TEXTAREA ? textArea : input}
				{props.label && <label htmlFor={id}>{props.label}</label>}
				<span className="form-error">{props.errors?.[props.name]?.message as string}</span>
			</>
		</div>
	)
}