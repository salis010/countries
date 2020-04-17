import React from 'react'
import styled from 'styled-components'
import { Question } from '../../question'
import { Field } from '../field'
import { InputField } from '../input-field'
import { isNameValid, isEmailValid, isPasswordValid } from '../utils'
import { registerUser } from './register-user'


const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`

const FormWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 4rem;
`


export const Question5 = ({ 
		name, setName, 
		email, setEmail, 
		password, setPassword, 
		isFormValid, setFormValid 
	}) => {

	const checkFormValidity = () => name.isValid && email.isValid && password.isValid

	const handleClick = () => {
		registerUser({
			name: name,
			email: email, 
			password: password
		})
	}

	return ( 
		<Wrapper>			
			<Question questionNumber={5}>			
				<FormWrapper>
					<Field fieldStatus={name.status} isValid={name.isValid} errorMessage="Error: must be longer with no spaces">
						<InputField 
							name='name'
							label='Name'
							text={name.value}
							validator={isNameValid}
							setFormValue={setName}
							isFormValid={isFormValid}
							setFormValid={setFormValid}
							checkFormValidity={checkFormValidity}
						/>
					</Field>
					<Field fieldStatus={email.status} isValid={email.isValid} errorMessage="Error: must be ____@__.__">
						<InputField 
							name='email'
							label='email'
							text={email.value}
							validator={isEmailValid}
							setFormValue={setEmail}
							isFormValid={isFormValid}
							setFormValid={setFormValid}
							checkFormValidity={checkFormValidity}
						/>
					</Field>
					<Field fieldStatus={password.status} isValid={password.isValid} errorMessage="Error: must be longer with no spaces">
						<InputField 
							name='password'
							label='Password'
							text={password.value}
							validator={isPasswordValid}
							setFormValue={setPassword}
							isFormValid={isFormValid}
							setFormValid={setFormValid}
							checkFormValidity={checkFormValidity}
						/>
					</Field>
					<button disabled={!isFormValid} onClick={handleClick}>Register</button>				
				</FormWrapper>		
			</Question>
		</Wrapper>
	 )
}
