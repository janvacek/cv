import CustomButton from '~/src/Components/DesignSystem/Button/CustomButton'
import ChevronLeftIcon from '~/src/Components/Icons/ChevronLeftIcon'
import { ButtonType } from '~/src/Model/Button/Button'
import CloseIcon from '~/src/Components/Icons/CloseIcon'
import ProsConsReducedSummary from '~/src/Components/ProsConsSummary/ProsConsReducedSummary'
import React, { useContext, useMemo } from 'react'
import { ProsConsContext, ProsConsContextType } from '~/src/Infrastructure/ProsConsContext/ProsConsContext'

interface Props {
	open?: boolean
	onClick: () => void
}

const defaultProps: Partial<Props> = {
	open: false
}

export default function SidePanelControl(props: Props) {
	props = { ...defaultProps, ...props }
	const { prosCons } = useContext<ProsConsContextType>(ProsConsContext)

	const isReducedSummaryOpen = useMemo<boolean>(() => Boolean(prosCons.items.length && !props.open), [props, prosCons])

	return (
		<div className="side-panel-control">
			<CustomButton
				type={ButtonType.ICON}
				className="side-panel-control-button"
				onClick={props.onClick}
			>
				{props.open ? <CloseIcon /> : <ChevronLeftIcon/>}
			</CustomButton>
			<ProsConsReducedSummary show={isReducedSummaryOpen}/>
		</div>
	)
}