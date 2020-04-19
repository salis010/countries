import React from 'react'
import PropTypes from 'prop-types'
import { Question } from '../../question'
import { Form } from '../../common'
import { InputSimple } from '../../input-components/input-simple/index'
import { Button, Notification } from '../../common'
import { baseUrl } from '../../../constants'
import jwt from 'jwt-decode' 


export const Question6 = ({ 
		name, setLoginName, 
		email, setLoginEmail, 
		password, setLoginPassword 
	}) => {

	const login = () => {
		
		const formData = new FormData()
    
		formData.set('email', email)
		formData.set('password', password)

		fetch(`${baseUrl}/login`, {
			method: 'POST',
			body: formData,
		})
			.then(response => response.json())
			.then(token => {
				const name = jwt(token).name
				localStorage.setItem('name', name)
				setLoginName(name)
			})
			.catch(err => {
				console.log('Login failed:', err)
				setLoginName('')
			})
	}
	 
	return ( 
		<Question questionNumber={6}>			
			{!name && 
				<Form>
					<InputSimple
						label='email'
						text={email}
						setFieldValue={setLoginEmail}
					/>
					<InputSimple
						type='password'
						label='Password'
						text={password}
						setFieldValue={setLoginPassword}
					/>
					<Button 
						onClick={login}
					>
						Login
					</Button>
				</Form>
			}
			{name && <Notification>Logged in as {name}</Notification>}
		</Question>
	 )
}

Question6.propTypes = {
	name: PropTypes.string.isRequired,
	setLoginName: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	setLoginEmail: PropTypes.func.isRequired,
	password: PropTypes.string.isRequired,
	setLoginPassword: PropTypes.func.isRequired,	
}
