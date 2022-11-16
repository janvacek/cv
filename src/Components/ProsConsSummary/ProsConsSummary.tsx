import ProsConsInput from '~/src/Components/ProsConsSummary/ProsConsInput'
import { ProsConsItem as ProsConsItemType, ProsConsType } from '~/src/Model/ProsConsSummary/ProsConsItem'
import { useState } from 'react'
import ProsConsList from '~/src/Components/ProsConsSummary/ProsConsList'

export default function ProsConsSummary() {
	const [prosCons, setProsCons] = useState<ProsConsItemType[]>([])

	const addItem = (input: string, type: ProsConsType) => {
		setProsCons([...prosCons, {
			text: input,
			type: type
		}])
	}

	const removeItem = (item: ProsConsItemType) => {
		setProsCons(prosCons.filter(pci => pci !== item))
	}

	return (
		<div className="pros-cons-summary">
			<ProsConsList className="pro" heading="Klady" items={prosCons.filter(i => i.type === ProsConsType.PRO)} onRemoveItem={removeItem} />
			<ProsConsList className="con" heading="Zápory" items={prosCons.filter(i => i.type === ProsConsType.CON)} onRemoveItem={removeItem} />
			<ProsConsList className="note" heading="Poznámky" items={prosCons.filter(i => i.type === ProsConsType.NOTE)} hideItemsCount onRemoveItem={removeItem} />
			<ProsConsInput onButtonClick={addItem} />
		</div>
	)
}