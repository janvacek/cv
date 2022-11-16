import { ProsConsItem as ProsConsItemType, ProsConsType } from '~/src/Model/ProsConsSummary/ProsConsItem'
import PlusIcon from '~/src/Components/Icons/PlusIcon'
import MinusIcon from '~/src/Components/Icons/MinusIcon'
import TrashIcon from '~/src/Components/Icons/TrashIcon'
import { ReactNode } from 'react'
import InfoIcon from '~/src/Components/Icons/InfoIcon'

interface Props {
	item: ProsConsItemType
	onRemoveItem: () => void
}

export default function ProsConsItem(props: Props) {
	const iconMap: { [n in ProsConsType]: ReactNode } = {
		[ProsConsType.PRO]: <PlusIcon/>,
		[ProsConsType.CON]: <MinusIcon/>,
		[ProsConsType.NOTE]: <InfoIcon/>
	}

	return (
		<li className={`pros-cons-list-item ${props.item.type}`}>
			<div className="icon">
				{iconMap[props.item.type]}
			</div>
			{ props.item.text }
			<button onClick={() => props.onRemoveItem()}><TrashIcon /></button>
		</li>
	)
}