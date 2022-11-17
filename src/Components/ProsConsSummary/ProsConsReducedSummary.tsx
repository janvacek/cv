import { useContext } from 'react'
import { ProsConsContext, ProsConsContextType } from '~/src/Infrastructure/ProsConsContext/ProsConsContext'
import { ProsConsType } from '~/src/Model/ProsConsSummary/ProsConsItem'

interface Props {
	show: boolean
}

export default function ProsConsReducedSummary(props: Props) {
	const { prosCons } = useContext<ProsConsContextType>(ProsConsContext)

	return (
		<div className={`pros-cons-reduced-summary ${props.show && 'show'}`}>
			<div className="count pro">{prosCons.items.filter(i => i.type === ProsConsType.PRO).length}</div>
			<div className="count con">{prosCons.items.filter(i => i.type === ProsConsType.CON).length}</div>
			<div className="count note">{prosCons.items.filter(i => i.type === ProsConsType.NOTE).length}</div>
		</div>
	)
}