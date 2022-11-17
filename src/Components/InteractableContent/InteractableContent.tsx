import { ReactNode, useContext, useMemo, useState } from 'react'
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
	tagName?: keyof JSX.IntrinsicElements
}

const defaultProps: Partial<Props> = {
	tagName: 'div'
}

export default function InteractableContent(props: Props) {
	props = {...defaultProps, ...props}
	const { id: propsId } = props
	const { prosCons, addItem: addProsConsItem, removeItem: removeProsConsItem } = useContext<ProsConsContextType>(ProsConsContext)
	const Tag = props.tagName as keyof JSX.IntrinsicElements

	const [focused, setFocused] = useState<boolean>(false)

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

	const onBlur = () => {
		console.log('kek')
		setFocused(false)
	}

	const isSelected = useMemo<boolean>(() => prosCons.items.some(i => i.id === propsId), [prosCons, propsId])

	return (
		<Tag className={`interactable-content ${focused && 'selected'}`} onClick={onClick} onBlur={onBlur}>
			{props.children}
			{(isSelected || focused) &&
				<InteractableContentControls
					id={props.id}
					isSelected={isSelected}
					onAdd={addItem}
					onRemove={removeItem}
				/>
			}
		</Tag>
	)
}