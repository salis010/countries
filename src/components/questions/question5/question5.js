import React from 'react'
import PropTypes from 'prop-types'
import { Question } from '../../question'
import { Form } from '../../common'
import { Input } from '../../input-components/input/index'
import { Button } from '../../common'
import { isNameValid, isEmailValid, isPasswordValid } from '../utils'
import { registerUser } from './register-user'


export const Question5 = ({ 
		name, setName, 
		email, setEmail, 
		password, setPassword, 
		isFormValid
	}) => {

	const handleClick = () => {
		registerUser({
			name: name,
			email: email, 
			password: password
		})
	}

	return ( 
		<Question questionNumber={5}>			
			<Form>
				<Input 
					fieldStatus={name.status} 
					isValid={name.isValid} 
					errorMessage="Error: must be longer with no spaces"
					name='name'
					label='Name'
					text={name.value}
					validator={isNameValid}
					setFieldValue={setName}
				/>
				<Input
					fieldStatus={email.status}
					isValid={email.isValid}
					errorMessage="Error: must be ____@__.__"	
					name='email'
					label='email'
					text={email.value}
					validator={isEmailValid}
					setFieldValue={setEmail}
				/>
				<Input 
					type='password'
					fieldStatus={password.status}
					isValid={password.isValid}
					errorMessage="Error: must be longer with no spaces"
					name='password'
					label='Password'
					text={password.value}
					validator={isPasswordValid}
					setFieldValue={setPassword}
				/>
				<Button 
					disabled={!isFormValid} 
					onClick={handleClick}>
						Register
				</Button>				
			</Form>		
			</Question>
	 )
}

Question5.propTypes = {
	name: PropTypes.object.isRequired,
	setName: PropTypes.func.isRequired, 
	email: PropTypes.object.isRequired,
	setEmail: PropTypes.func.isRequired, 
	password: PropTypes.object.isRequired,
	setPassword: PropTypes.func.isRequired, 
	isFormValid: PropTypes.bool.isRequired,
}
