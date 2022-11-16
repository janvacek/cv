import { ProsConsItem as ProsConsItemType, } from '~/src/Model/ProsConsSummary/ProsConsItem'
import { ReactNode, useMemo } from 'react'
import ProsConsItem from '~/src/Components/ProsConsSummary/ProsConsItem'

interface Props {
	className: string
	heading: string
	items: ProsConsItemType[]
	hideItemsCount?: boolean
	onRemoveItem: (item: ProsConsItemType) => void
}

const defaultProps: Partial<Props> = {
	hideItemsCount: false
}

export default function ProsConsList(props: Props) {
	props = {...defaultProps, ...props}
	const { items, onRemoveItem } = props

	const itemsToRender = useMemo<ReactNode[]>(() => {
		return items?.map((pci: ProsConsItemType, index) => {
			return <ProsConsItem key={`${pci.text}-${index}`} item={pci} onRemoveItem={() => onRemoveItem(pci)} />
		}) ?? []
	}, [items, onRemoveItem])

	return (
		<div className={`pros-cons-list ${props.className}`}>
			<div className="pros-cons-list-heading">
				<h3>{props.heading}</h3>
				{props.hideItemsCount || <div>{itemsToRender.length}</div>}
			</div>
			<ul>
				{itemsToRender}
			</ul>
		</div>
	)
}
