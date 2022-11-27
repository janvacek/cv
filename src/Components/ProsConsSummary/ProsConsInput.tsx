import {ProsConsType} from '~/src/Model/ProsConsSummary/ProsConsItem'
import React, { useRef } from 'react'
import CustomButton from '~/src/Components/DesignSystem/Button/CustomButton'
import TextInput from "~/src/Components/DesignSystem/Form/TextInput";
import * as yup from "yup";
import {useForm, FormProvider} from "react-hook-form";
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
	const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)

	const formMethods = useForm<Inputs>({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	})

	const handleButtonClick = (type: ProsConsType) => {
		props.onButtonClick(formMethods.getValues('addItemName'), type)
		inputRef?.current?.focus()
		formMethods.resetField('addItemName')
	}

	return (
		<FormProvider {...formMethods}>
			<div>
				<TextInput
					name={"addItemName"}
					label={"Přidejte vlastní položku"}
					placeholder={"Přidejte vlastní položku"}
					onInputMounted={(e) => inputRef.current = e}
				/>
			</div>
			<CustomButton onClick={formMethods.handleSubmit(() => handleButtonClick(ProsConsType.CON))}>CON</CustomButton>
			<CustomButton onClick={formMethods.handleSubmit(() => handleButtonClick(ProsConsType.PRO))}>PRO</CustomButton>
			<CustomButton onClick={formMethods.handleSubmit(() => handleButtonClick(ProsConsType.NOTE))}>NOTE</CustomButton>
			<CustomButton onClick={props.onSendFeedbackClick}>FEEDBACK</CustomButton>
			<DevTool control={formMethods.control} />
		</FormProvider>
	)
}