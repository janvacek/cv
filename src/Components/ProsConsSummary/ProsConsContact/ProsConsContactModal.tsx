import Modal, { ModalProps } from '~/src/Components/DesignSystem/Modal/Modal'
import ProsConsContactForm from '~/src/Components/ProsConsSummary/ProsConsContact/ProsConsContactForm'
import {ProsConsContextState} from "~/src/Infrastructure/ProsConsContext/ProsConsContext";

interface Props extends ModalProps {
	prosCons: ProsConsContextState
}

export default function ProsConsContactModal(props: Props) {
	return (
		<>
			<Modal onHide={props.onHide}>
				<ProsConsContactForm prosCons={props.prosCons} />
			</Modal>
		</>
	)
}