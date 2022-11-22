import { DevTool } from '@hookform/devtools'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Col, Row } from 'react-bootstrap'
import TextInput from '~/src/Components/DesignSystem/Form/TextInput'
import { InputType } from '~/src/Model/Input/InputType'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import CustomButton from '~/src/Components/DesignSystem/Button/CustomButton'

interface Inputs {
	name: string
	email: string
	note: string
}

const schema = yup.object({
	name: yup.string().required('Povinné pole'),
	email: yup.string().email('Zadejte platný e-mail').required('Povinné pole')
}).required()

export default function ProsConsContactForm() {
	const { register, control, handleSubmit, formState: { errors } } = useForm<Inputs>({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	})

	const [formData, setFormData] = useState<Inputs>({
		name: '',
		email: '',
		note: ''
	})

	const updateFormData = (event: any, inputName: keyof Inputs) => {
		const newData = {...formData}
		newData[inputName] = event.target.value
		setFormData(newData)
	}

	const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
		alert(JSON.stringify(data))
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Row>
					<Col md={6}>
						<TextInput
							name={'name'}
							label="Vaše ctěné jméno"
							placeholder="Vaše ctěné jméno"
							register={register('name', {
								onChange: (e) => updateFormData(e, 'name')
							})}
							errors={errors}
						/>
					</Col>
					<Col md={6}>
						<TextInput
							name={'email'}
							label="Váš e-mail"
							placeholder="Váš e-mail"
							register={register('email', {
								onChange: (e) => updateFormData(e, 'email')
							})}
							errors={errors}
						/>
					</Col>
					<Col>
						<TextInput
							name={'note'}
							type={InputType.TEXTAREA}
							label="Poznámka"
							placeholder="Poznámka"
							register={register('note', {
								onChange: (e) => updateFormData(e, 'note')
							})}
							errors={errors}
						/>
					</Col>
				</Row>
				<CustomButton submit>
					Odeslat
				</CustomButton>
			</form>
			<DevTool control={control} />
		</>
	)
}