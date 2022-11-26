import ProsConsInput from '~/src/Components/ProsConsSummary/ProsConsInput'
import { ProsConsItem as ProsConsItemType, ProsConsType } from '~/src/Model/ProsConsSummary/ProsConsItem'
import ProsConsList from '~/src/Components/ProsConsSummary/ProsConsList'
import React, { useContext, useState } from 'react'
import {
	ProsConsContext,
	ProsConsContextType
} from '~/src/Infrastructure/ProsConsContext/ProsConsContext'
import ProsConsContactModal from '~/src/Components/ProsConsSummary/ProsConsContact/ProsConsContactModal'

export default function ProsConsSummary() {
	const { prosCons, addItem: addProsConsItem, removeItem: removeProsConsItem } = useContext<ProsConsContextType>(ProsConsContext)
	const [showContactModal, setShowContactModal] = useState<boolean>(false)

	const addItem = (input: string, type: ProsConsType) => {
		addProsConsItem(input, type)
	}

	const removeItem = (item: ProsConsItemType) => {
		removeProsConsItem(item.id)
	}

	return (
		<div className="pros-cons-summary-container">
			<div className="pros-cons-summary-lists">
				<ProsConsList className="pro" heading="Klady" items={prosCons.items.filter(i => i.type === ProsConsType.PRO)} onRemoveItem={removeItem} />
				<ProsConsList className="con" heading="Zápory" items={prosCons.items.filter(i => i.type === ProsConsType.CON)} onRemoveItem={removeItem} />
				<ProsConsList className="note" heading="Poznámky" items={prosCons.items.filter(i => i.type === ProsConsType.NOTE)} hideItemsCount onRemoveItem={removeItem} />
			</div>
			<div className="pros-cons-summary-footer">
				<ProsConsInput onButtonClick={addItem} onSendFeedbackClick={() => setShowContactModal(true)} />
			</div>
			{showContactModal && <ProsConsContactModal prosCons={prosCons} onHide={() => setShowContactModal(false)} />}
		</div>
	)
}