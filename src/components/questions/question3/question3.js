import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Question } from '../../question'

export const filterStringArray = (arr, filter) => {
	
	const rx = new RegExp(`${filter}`, 'i')

	const results = arr.filter(str => rx.test(str))

	return results
}


export const Question3 = ({ country, setCountry, allCountries, setAllCountries, filteredCountries, setFilteredCountries }) => {
	
	useEffect(() => {
		getAllCountries()
	}, [])

	const getAllCountries = () =>
		fetch(`https://restcountries.eu/rest/v2/all`)
			.then(response => response.json())
			.then(data => data.map(country => country.name))
			.then(data => setAllCountries(data))
			.catch(err => console.log(err))

	const handleChange = event => setCountry(event.target.value)
	 
	const handleFilterButton = () => {
		const filteredCountries = filterStringArray(allCountries, country)

		setFilteredCountries(filteredCountries)
	}


	return ( 
		<Question questionNumber={3}>			
			<input value={country} onChange={handleChange}/>
			<button onClick={handleFilterButton}>Filter</button>
			{filteredCountries && <ul>
				{filteredCountries.map(country => 
					<li key={country}>
						{country}
					</li>)}
			</ul>}			
		</Question>
	 )
}
