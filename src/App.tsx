import React  from 'react'
import ProsConsSummary from '~/src/Components/ProsConsSummary/ProsConsSummary'
import InteractableContent from '~/src/Components/InteractableContent/InteractableContent'
import { ProsConsContextProvider } from '~/src/Infrastructure/ProsConsContext/ProsConsContext'

function App() {
	return (
		<ProsConsContextProvider>
			<ProsConsSummary/>
			<div>
				<p>addasd</p>
				<p>addasd</p>
				<InteractableContent id="test-1" heading="Testovací položka 1">
					addasd
				</InteractableContent>
				<p>addasd</p>
			</div>
		</ProsConsContextProvider>
	)
}

export default App
