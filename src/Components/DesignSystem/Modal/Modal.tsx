import { ReactNode, useState } from 'react'
import BsModal from 'react-bootstrap/Modal';
import BsModalHeader from 'react-bootstrap/ModalHeader';
import BsModalTitle from 'react-bootstrap/ModalTitle';
import BsModalBody from 'react-bootstrap/ModalBody';
import BsModalFooter from 'react-bootstrap/ModalFooter';

export interface ModalProps {
	onHide?: () => void
	showFooter?: boolean
	title?: string
	footerSlot?: ReactNode
	headerSlot?: ReactNode
}

interface Props extends ModalProps {
	children: ReactNode
}

const defaultProps: Partial<Props> = {
	showFooter: false,
	title: '',
}

export default function Modal(props: Props) {
	props = { ...defaultProps, ...props }

	const [show, setShow] = useState<boolean>(true)

	const onHide = () => {
		setShow(false)
	}

	const onExited = () => {
		props.onHide?.()
	}

	return (
		<BsModal
			show={show}
			onHide={onHide}
			onExited={onExited}
		>
			<BsModalHeader closeButton>
				{props.headerSlot ? (
					props.headerSlot
				) : (
					props.title && (
						<BsModalTitle>{props.title}</BsModalTitle>
					)
				)}
			</BsModalHeader>

			<BsModalBody>
				{props.children}
			</BsModalBody>

			{props.showFooter && (
				<BsModalFooter>
					{props.footerSlot}
				</BsModalFooter>
			)}
		</BsModal>
	)
}