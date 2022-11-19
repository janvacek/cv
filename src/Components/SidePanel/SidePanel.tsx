import ProsConsSummary from '~/src/Components/ProsConsSummary/ProsConsSummary'
import React, { useState } from 'react'
import SidePanelControl from '~/src/Components/SidePanel/SidePanelControl'
import classNames from 'classnames'

export default function SidePanel() {
	const [show, setShow] = useState<boolean>(false)

	return (
		<div className={classNames('side-panel-container', { 'show': show })}>
			<ProsConsSummary/>
			<SidePanelControl open={show} onClick={() => setShow(!show)}/>
		</div>
	)
}