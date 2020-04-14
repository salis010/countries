import React from 'react'
import styled from 'styled-components'
import { Question } from '../../question'


export const Question3 = ({ country, setCountry, matchingCountries, setMatchingCountries }) => {
	
	const getMatchingCountries = () =>
		fetch(`https://restcountries.eu/rest/v2/name/${country}`)
			.then(response => response.json())
			.then(data => data.map(country => country.name))
			.then(data => setMatchingCountries(data))
			.catch(err => console.log(err))

	const handleChange = event => setCountry(event.target.value)
	 
	return ( 
		<Question questionNumber={3}>			
			<input value={country} onChange={handleChange}/>
			{matchingCountries && <ul>
				{matchingCountries.map(country => 
					<li key={country}>
						{country}
					</li>)}
			</ul>}
			<button onClick={getMatchingCountries}>Question 3</button>
		</Question>
	 )
}
