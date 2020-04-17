import React from 'react'
import styled from 'styled-components'
import { Question } from '../../question'
import { baseUrl } from '../../../constants'
import { Field } from '../field'
import { InputField } from '../input-field'
import jwt from 'jwt-decode' 

// https://www.sitepoint.com/using-json-web-tokens-node-js/
// How do you take the token from localStorage to use it to visit certain pages?

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`

const FormWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 4rem;
`

export const Question6 = ({ name, setLoginName, email, setLoginEmail, password, setLoginPassword }) => {

	const login = () => {
		
		const formData = new FormData()
    
		formData.set('email', email.value)
		formData.set('password', password.value) // aufaeiufef

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
		<Wrapper>
			<Question questionNumber={6}>			
				{name.value && <h2>Logged in as {name.value}</h2>}
				{!name.value && <FormWrapper>
					<Field>
						<InputField 
							name='email'
							label='email'
							text={email.value}
							validator={() => null}
							setFormValue={setLoginEmail}
							checkFormValidity={() => true}
							setFormValid={() => true}
						/>
					</Field>
					<Field>
						<InputField 
							name='password'
							label='Password'
							text={password.value}
							validator={() => null}
							setFormValue={setLoginPassword}
							checkFormValidity={() => true}
							setFormValid={() => true}
						/>
					</Field>
					<button onClick={login}>Login</button>
				</FormWrapper>
				}
			</Question>
		</Wrapper>
	 )
}
