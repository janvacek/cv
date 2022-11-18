import { ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react'
import InteractableContentControls from '~/src/Components/InteractableContent/InteractableContentControls'
import {
	ProsConsContext,
	ProsConsContextType
} from '~/src/Infrastructure/ProsConsContext/ProsConsContext'
import { ProsConsType } from '~/src/Model/ProsConsSummary/ProsConsItem'

interface Props {
	children: ReactNode
	heading: string
	id: string
	tagName?: string
}

const defaultProps: Partial<Props> = {
	tagName: 'div'
}

export default function InteractableContent(props: Props) {
	props = {...defaultProps, ...props}
	const { id: propsId } = props

	const TagName = props.tagName
	const { prosCons, addItem: addProsConsItem, removeItem: removeProsConsItem } = useContext<ProsConsContextType>(ProsConsContext)
	const rootTag = useRef<JSX.IntrinsicElements>(null)

	const [focused, setFocused] = useState<boolean>(false)
	const isSelected = useMemo<boolean>(() => prosCons.items.some(i => i.id === propsId), [prosCons, propsId])

	const addItem = (type: ProsConsType) => {
		addProsConsItem(props.heading, type, props.id)
		setFocused(false)
	}

	const removeItem = () => {
		removeProsConsItem(props.id)
		setFocused(false)
	}

	const onClick = () => {
		if (isSelected) {
			return
		}
		setFocused(!focused)
	}

	const documentClickHandler = (event: MouseEvent) => {
		if (rootTag.current !== event.target) {
			setFocused(false)
		}
	}


	useEffect(() => {
		document.addEventListener('click', documentClickHandler)

		return () => document.removeEventListener('click', documentClickHandler)
	}, [])

	return (
		// @ts-ignore
		<TagName
			ref={rootTag}
			className={`interactable-content ${(isSelected || focused) && 'selected'}`}
			onClick={onClick}
		>
			{props.children}
			{(isSelected || focused) &&
				<InteractableContentControls
					id={props.id}
					isSelected={isSelected}
					onAdd={addItem}
					onRemove={removeItem}
				/>
			}
		</TagName>
	)
}