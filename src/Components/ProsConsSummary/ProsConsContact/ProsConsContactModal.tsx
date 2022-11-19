import Modal, { ModalProps } from '~/src/Components/DesignSystem/Modal/Modal'
import ProsConsContactForm from '~/src/Components/ProsConsSummary/ProsConsContact/ProsConsContactForm'

interface Props extends ModalProps {

}

export default function ProsConsContactModal(props: Props) {
	return (
		<>
			<Modal onHide={props.onHide}>
				<ProsConsContactForm />
			</Modal>
		</>
	)
}