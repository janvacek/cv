import { ProsConsType } from '~/src/Model/ProsConsSummary/ProsConsItem'
import MinusIcon from '~/src/Components/Icons/MinusIcon'
import PlusIcon from '~/src/Components/Icons/PlusIcon'
import TrashIcon from '~/src/Components/Icons/TrashIcon'

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

	return (
		<div className="interactable-content-controls">
			{props.isSelected ? (
				<button onClick={props.onRemove}><TrashIcon/></button>
			) : (
				<>
					<button onClick={() => addItem(ProsConsType.PRO)}><PlusIcon/></button>
					<button onClick={() => addItem(ProsConsType.CON)}><MinusIcon/></button>
				</>
			)}
		</div>
	)
}