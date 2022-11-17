import { ReactNode, useContext, useMemo } from 'react'
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
	tagName: 'p'
}

export default function InteractableContent(props: Props) {
	props = {...defaultProps, ...props}
	const { id: propsId } = props
	const { prosCons, addItem: addProsConsItem, removeItem: removeProsConsItem } = useContext<ProsConsContextType>(ProsConsContext)
	const Tag = props.tagName as keyof JSX.IntrinsicElements

	const addItem = (type: ProsConsType) => {
		addProsConsItem(props.heading, type, props.id)
	}

	const removeItem = () => {
		removeProsConsItem(props.id)
	}

	const isSelected = useMemo<boolean>(() => prosCons.items.some(i => i.id === propsId), [prosCons, propsId])

	return (
		<Tag className="interactable-content">
			{props.children}
			<InteractableContentControls
				id={props.id}
				isSelected={isSelected}
				onAdd={addItem}
				onRemove={removeItem}
			/>
		</Tag>
	)
}