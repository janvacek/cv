import Button from 'react-bootstrap/Button'
import { ReactNode } from 'react'
import { ButtonVariant } from 'react-bootstrap/types'
import { ButtonType } from '~/src/Model/Button/Button'

interface Props {
	children: ReactNode
	className?: string
	type?: ButtonType
	variant?: ButtonVariant
	submit?: boolean
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const defaultProps: Partial<Props> = {
	variant: 'primary',
	type: ButtonType.TEXT,
	className: '',
	submit: false
}

export default function CustomButton(props: Props) {
	props = { ...defaultProps, ...props }

	return (
		<Button
			type={props.submit ? 'submit' : 'button'}
			variant={props.variant}
			className={`type-${props.type} ${props.className}`}
			onClick={(e: React.MouseEvent<HTMLButtonElement>) => props.onClick?.(e)}
		>
			{props.children}
		</Button>
	)
}