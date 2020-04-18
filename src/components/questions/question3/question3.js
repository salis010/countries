import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Question } from '../../question'
import { InputSimple } from '../../input-components/input-simple/index'
import { Button } from '../../common'
import { filterStringArray } from '../utils'


const ButtonWrapper = styled.div`
	display: flex;
	margin-top: 2rem;
`

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

		setFilteredCountries(filteredCountries)
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
