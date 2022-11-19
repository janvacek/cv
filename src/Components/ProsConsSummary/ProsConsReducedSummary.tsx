import { useContext } from 'react'
import { ProsConsContext, ProsConsContextType } from '~/src/Infrastructure/ProsConsContext/ProsConsContext'
import { ProsConsType } from '~/src/Model/ProsConsSummary/ProsConsItem'
import classNames from 'classnames'

interface Props {
	show: boolean
}

export default function ProsConsReducedSummary(props: Props) {
	const { prosCons } = useContext<ProsConsContextType>(ProsConsContext)

	return (
		<div className={classNames('pros-cons-reduced-summary', { 'show': props.show })}>
			<div className="count pro">{prosCons.items.filter(i => i.type === ProsConsType.PRO).length}</div>
			<div className="count con">{prosCons.items.filter(i => i.type === ProsConsType.CON).length}</div>
			<div className="count note">{prosCons.items.filter(i => i.type === ProsConsType.NOTE).length}</div>
		</div>
	)
}