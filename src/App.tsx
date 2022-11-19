import React  from 'react'
import InteractableContent from '~/src/Components/InteractableContent/InteractableContent'
import { ProsConsContextProvider } from '~/src/Infrastructure/ProsConsContext/ProsConsContext'
import SidePanel from '~/src/Components/SidePanel/SidePanel'
import { Col, Container, Row } from 'react-bootstrap'

function App() {
	return (
		<ProsConsContextProvider>
			<SidePanel />
			<Container className={'pt-5'}>
				<Row>
					<Col>
						<InteractableContent id="test-1" proHeadingOverride={"Fešák"} heading="Testovací položka 1">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquam aspernatur assumenda cumque delectus enim excepturi harum iste iusto laudantium nihil obcaecati quisquam recusandae reiciendis reprehenderit sunt vero vitae. Sed?
						</InteractableContent>
					</Col>
					<Col>
						<InteractableContent id="test-2" heading="Testovací položka 2">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque esse labore natus similique tempora. Consequuntur modi, neque. Reiciendis rerum, voluptas. Aliquam amet consequatur expedita nihil officiis quaerat quos repellendus velit.
						</InteractableContent>
					</Col>
					<Col>
						<InteractableContent id="test-3" heading="Testovací položka 3">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque esse labore natus similique tempora. Consequuntur modi, neque. Reiciendis rerum, voluptas. Aliquam amet consequatur expedita nihil officiis quaerat quos repellendus velit.
						</InteractableContent>
					</Col>
				</Row>
			</Container>
		</ProsConsContextProvider>
	)
}

export default App
