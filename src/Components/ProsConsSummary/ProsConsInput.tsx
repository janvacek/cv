import {ProsConsType} from '~/src/Model/ProsConsSummary/ProsConsItem'
import {useRef, useState} from 'react'
import CustomButton from '~/src/Components/DesignSystem/Button/CustomButton'
import TextInput from "~/src/Components/DesignSystem/Form/TextInput";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {DevTool} from "@hookform/devtools";

interface Props {
	onButtonClick: (text: string, type: ProsConsType) => void
	onSendFeedbackClick: () => void
}

interface Inputs {
	addItemName: string
}

const schema = yup.object({
	addItemName: yup.string().matches(/^[\w\s]{1,}$/, "Pouze čísla, písmena a mezery").required('Povinné pole')
}).required()

export default function ProsConsInput(props: Props) {
	const inputRef = useRef<HTMLInputElement>(null)
	const [inputVal, changeInputVal] = useState<string>('')
	const { register, control, handleSubmit, formState: { errors } } = useForm<Inputs>({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	})

	const handleButtonClick = (type: ProsConsType) => {
		props.onButtonClick(inputVal, type)
		inputRef.current?.focus()
	}

	return (
		<>
			<div>
				<TextInput
					ref={inputRef}
					name={"addItemName"}
					errors={errors}
					register={register('addItemName', {
						onChange: (e) => changeInputVal(e.target.value)
					})}
				/>
			</div>
			<CustomButton onClick={handleSubmit(() => handleButtonClick(ProsConsType.CON))}>CON</CustomButton>
			<CustomButton onClick={handleSubmit(() => handleButtonClick(ProsConsType.PRO))}>PRO</CustomButton>
			<CustomButton onClick={handleSubmit(() => handleButtonClick(ProsConsType.NOTE))}>NOTE</CustomButton>
			<CustomButton onClick={props.onSendFeedbackClick}>FEEDBACK</CustomButton>
			<DevTool control={control} />
		</>
	)
}