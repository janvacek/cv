import { DevTool } from '@hookform/devtools'
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import {Col, Row} from 'react-bootstrap'
import TextInput from '~/src/Components/DesignSystem/Form/TextInput'
import { InputType } from '~/src/Model/Input/InputType'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import CustomButton from '~/src/Components/DesignSystem/Button/CustomButton'
import {ProsConsContextState} from "~/src/Infrastructure/ProsConsContext/ProsConsContext";
import {useProsConsRepository} from "~/src/Infrastructure/ProsCons/ProsConsRepository";
import CheckCircleIcon from "~/src/Components/Icons/CheckCircleIcon";
import classNames from "classnames";

interface Inputs {
	name: string
	email: string
	note: string
}

const schema = yup.object({
	name: yup.string().required('Povinné pole'),
	email: yup.string().email('Zadejte platný e-mail').required('Povinné pole')
}).required()

interface Props {
	prosCons: ProsConsContextState
}

export default function ProsConsContactForm(props: Props) {
	const { sendEmail } = useProsConsRepository()
	const [formSucceeded, setFormSucceeded] = useState<boolean>(false)
	const [formSubmissionPending, setFormSubmissionPending] = useState<boolean>(false)
	const formMethods = useForm<Inputs>({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	})

	const [formData, setFormData] = useState<Inputs>({
		name: '',
		email: '',
		note: ''
	})

	const updateFormData = (value: string, inputName: keyof Inputs) => {
		const newData = {...formData}
		newData[inputName] = value
		setFormData(newData)
	}

	const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
		setFormSubmissionPending(true)
		await sendEmail({
			...data,
			items: props.prosCons.items.map(item => {
				return {
					type: item.type,
					text: item.text
				}
			})
		})
		setFormSucceeded(true)
		setFormSubmissionPending(false)
	}

	const successState = (
		<div className="form-success-state">
			<CheckCircleIcon />
			Vaši zprávu jsem přijal<br/>
			Děkuji!
		</div>
	)

	const form = (
		<FormProvider {...formMethods}>
			<form onSubmit={formMethods.handleSubmit(onSubmit)}>
				<Row>
					<Col md={6}>
						<TextInput
							name={'name'}
							label="Vaše ctěné jméno"
							placeholder="Vaše ctěné jméno"
							onChange={(value: string) => updateFormData(value, 'name')}
						/>
					</Col>
					<Col md={6}>
						<TextInput
							name={'email'}
							label="Váš e-mail"
							placeholder="Váš e-mail"
							onChange={(value: string) => updateFormData(value, 'email')}
						/>
					</Col>
					<Col>
						<TextInput
							name={'note'}
							type={InputType.TEXTAREA}
							label="Poznámka"
							placeholder="Poznámka"
							onChange={(value: string) => updateFormData(value, 'note')}
						/>
					</Col>
				</Row>
				<CustomButton submit>
					Odeslat
				</CustomButton>
			</form>
		</FormProvider>
	)

	return (
		<div className={classNames("form-container", {'pending': formSubmissionPending})}>
			{formSucceeded ? successState : form}
			<DevTool control={formMethods.control} />
		</div>
	)
}