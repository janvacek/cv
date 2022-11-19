import { ReactNode } from 'react'
import BsModal from 'react-bootstrap/Modal';
import BsModalDialog from 'react-bootstrap/ModalDialog';
import BsModalHeader from 'react-bootstrap/ModalHeader';
import BsModalTitle from 'react-bootstrap/ModalTitle';
import BsModalBody from 'react-bootstrap/ModalTitle';
import BsModalFooter from 'react-bootstrap/ModalFooter';

export interface ModalProps {
	onClose: () => void
}

interface Props extends ModalProps {
	children: ReactNode
}

const defaultProps: Partial<Props> = {

}

export default function Modal(props: Props) {
	props = { ...defaultProps, ...props }

	return (
		<BsModal
			show
			onHide={props.onClose}
		>
			<BsModalDialog>
				<BsModalHeader closeButton>
					<BsModalTitle>Modal title</BsModalTitle>
				</BsModalHeader>

				<BsModalBody>
					{props.children}
				</BsModalBody>

				<BsModalFooter>
					<p>asdasd</p>
				</BsModalFooter>
			</BsModalDialog>
		</BsModal>
	)
}