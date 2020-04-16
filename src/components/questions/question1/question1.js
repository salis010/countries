import React from 'react'
import styled from 'styled-components'
import { Question } from '../../question'
import { baseUrl } from '../../../constants'


export const Question1 = ({ country, countryData, setCountry, setCountryData }) => {

	const getCountry = () =>
		fetch(`${baseUrl}/question1/country/${country}`)
			.then(response => response.json())
			.then(data => setCountryData(data))
			.catch(err => console.log(err))

	const handleChange = event => setCountry(event.target.value)
	 
	return ( 
		<Question questionNumber={1}>			
			<input value={country} onChange={handleChange}/>
			{countryData && <ul>
				{Object.keys(countryData).map(item => 
					<li key={item}>
						{item}: {countryData[item]}
					</li>)}
			</ul>}
			<button onClick={getCountry}>Question 1</button>
		</Question>
	 )
}
