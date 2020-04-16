import React from 'react'
import styled from 'styled-components'
import { Question } from '../../question'
import { baseUrl } from '../../../constants'


export const Question6 = (props) => {

	const login = () => {
		console.log('login')
		// fetch(`${baseUrl}/question2/country/${country}`)
		fetch(`${baseUrl}/login`)
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(err => console.log(err))
	}
	 
	return ( 
		<Question questionNumber={6}>			
			
			<button onClick={login}>Login</button>
		</Question>
	 )
}
