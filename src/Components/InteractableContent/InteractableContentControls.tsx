import { ProsConsType } from '~/src/Model/ProsConsSummary/ProsConsItem'
import MinusIcon from '~/src/Components/Icons/MinusIcon'
import PlusIcon from '~/src/Components/Icons/PlusIcon'
import TrashIcon from '~/src/Components/Icons/TrashIcon'
import CustomButton from '~/src/Components/DesignSystem/Button/CustomButton'
import { ButtonType } from '~/src/Model/Button/Button'

interface Props {
	id: string
	isSelected?: boolean
	onAdd: (type: ProsConsType) => void
	onRemove: () => void
}

const defaultProps: Partial<Props> = {
	isSelected: false
}

export default function InteractableContentControls(props: Props) {
	props = { ...defaultProps, ...props }

	const addItem = (type: ProsConsType) => {
		props.onAdd(type)
	}

	const onRemoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation()
		props.onRemove()
	}

	return (
		<div className="interactable-content-controls">
			{props.isSelected ? (
				<CustomButton type={ButtonType.ICON} onClick={onRemoveClick}><TrashIcon/></CustomButton>
			) : (
				<>
					<CustomButton type={ButtonType.ICON} onClick={() => addItem(ProsConsType.PRO)}><PlusIcon/></CustomButton>
					<CustomButton type={ButtonType.ICON} onClick={() => addItem(ProsConsType.CON)}><MinusIcon/></CustomButton>
				</>
			)}
		</div>
	)
}