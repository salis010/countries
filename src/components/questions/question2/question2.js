import React from 'react'
import styled from 'styled-components'
import { Question } from '../../question'

export const Question2 = ({ country, setCountry, matchingCountries, setMatchingCountries }) => {
	
	const getMatchingCountries = () =>
		fetch(`http://localhost:3000/question2/country/${country}`)
			.then(response => response.json())
			.then(data => setMatchingCountries(data))
			.catch(err => console.log(err))

	const handleChange = event => setCountry(event.target.value)
	 
	return ( 
		<Question questionNumber={2}>			
			<input value={country} onChange={handleChange}/>
			{matchingCountries && <ul>
				{matchingCountries.map(country => 
					<li key={country}>
						{country}
					</li>)}
			</ul>}
			<button onClick={getMatchingCountries}>Question 2</button>
		</Question>
	 )
}
