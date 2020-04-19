import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Question } from '../../question'
import { InputSimple } from '../../input-components/input-simple/index'
import { Button, ButtonWrapper } from '../../common'
import { filterStringArray } from '../utils'


export const Question3 = ({ 
		country, setCountry, 
		allCountries, setAllCountries, 
		filteredCountries, setFilteredCountries 
	}) => {
	
	useEffect(() => {
		getAllCountries()
	}, [])

	const getAllCountries = () =>
		fetch(`https://restcountries.eu/rest/v2/all`)
			.then(response => response.json())
			.then(data => data.map(country => country.name))
			.then(data => setAllCountries(data))
			.catch(err => console.log(err))

	const handleChange = country => setCountry(country)
	 
	const handleFilterButton = () => {
		const filteredCountries = filterStringArray(allCountries, country)

		setFilteredCountries(filteredCountries.length > 0 ? filteredCountries : ['No matching countries'])
	}

	return ( 
		<Question questionNumber={3}>			
			<InputSimple 
				text={country} 
				label='Country'
				setFieldValue={handleChange} 
			/>
			<ButtonWrapper>
				<Button 
					onClick={handleFilterButton}
				>			
					Filter
				</Button>
			</ButtonWrapper>
				{filteredCountries && <ul>
					{filteredCountries.map(country => 
						<li key={country}>
							{country}
						</li>)}
				</ul>}			
		</Question>
	 )
}

Question3.propTypes = {
	country: PropTypes.string.isRequired,
	setCountry: PropTypes.func.isRequired,
	allCountries: PropTypes.array.isRequired,
	setAllCountries: PropTypes.func.isRequired,
	filteredCountries: PropTypes.array.isRequired,
	setFilteredCountries: PropTypes.func.isRequired,	
}
