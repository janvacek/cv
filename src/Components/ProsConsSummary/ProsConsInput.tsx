import { ProsConsType } from '~/src/Model/ProsConsSummary/ProsConsItem'
import { useMemo, useRef, useState } from 'react'
import CustomButton from '~/src/Components/DesignSystem/Button/CustomButton'

interface Props {
	onButtonClick: (text: string, type: ProsConsType) => void
	onSendFeedbackClick: () => void
}

export default function ProsConsInput(props: Props) {
	const inputRef = useRef<HTMLInputElement>(null)
	const [inputVal, changeInputVal] = useState<string>('')
	const [submitted, setSubmitted] = useState<boolean>(false)
	const inputValid = useMemo<boolean>(() => /^[\w\s]{1,}$/.test(inputVal), [inputVal])

	const handleInputChange = (input: string) => {
		changeInputVal(input)
		setSubmitted(false)
	}

	const handleButtonClick = (type: ProsConsType) => {
		setSubmitted(true)
		if(!inputValid) {
			return
		}
		props.onButtonClick(inputVal, type)
		setSubmitted(false)
		changeInputVal('')
		inputRef.current?.focus()
	}

	return (
		<>
			<div>
				<input
					ref={inputRef}
					value={inputVal}
					onChange={(e) => handleInputChange(e.target.value)}
				/>
				{(!inputValid && submitted) && <span className="input-error-message">Pouze písmena a číslice</span>}
			</div>
			<CustomButton onClick={() => handleButtonClick(ProsConsType.CON)}>CON</CustomButton>
			<CustomButton onClick={() => handleButtonClick(ProsConsType.PRO)}>PRO</CustomButton>
			<CustomButton onClick={() => handleButtonClick(ProsConsType.NOTE)}>NOTE</CustomButton>
			<CustomButton onClick={props.onSendFeedbackClick}>FEEDBACK</CustomButton>
		</>
	)
}