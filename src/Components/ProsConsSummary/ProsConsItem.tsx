import { ProsConsItem as ProsConsItemType, ProsConsType } from '~/src/Model/ProsConsSummary/ProsConsItem'
import PlusIcon from '~/src/Components/Icons/PlusIcon'
import MinusIcon from '~/src/Components/Icons/MinusIcon'
import TrashIcon from '~/src/Components/Icons/TrashIcon'
import { ReactNode, useState } from 'react'
import InfoIcon from '~/src/Components/Icons/InfoIcon'
import classNames from 'classnames'

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

	const [closing, setClosing] = useState<boolean>(false)

	const onRemoveClicked = () => {
		setClosing(true)
		setTimeout(props.onRemoveItem, 400)
	}

	return (
		<li className={classNames('pros-cons-list-item', props.item.type, {'closing': closing})}>
			<div className="icon">
				{iconMap[props.item.type]}
			</div>
			{ props.item.text }
			<button onClick={onRemoveClicked}><TrashIcon /></button>
		</li>
	)
}