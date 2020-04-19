import React from 'react'
import PropTypes from 'prop-types'
import { Question } from '../../question'
import { InputSimple } from '../../input-components/input-simple/index'
import { Button, ButtonWrapper } from '../../common'
import { baseUrl } from '../../../constants'


export const Question2 = ({ 
		country, setCountry, 
		matchingCountries, setMatchingCountries 
	}) => {
	
	const getMatchingCountries = () =>
		fetch(`${baseUrl}/question2/country/${country}`)
			.then(response => response.json())
			.then(data => setMatchingCountries(data))
			.catch(err => console.log(err))

	const handleChange = country => setCountry(country)
	 
	return ( 
		<Question questionNumber={2}>			
			<InputSimple 
				label='Country' 
				text={country} 
				setFieldValue={handleChange} 
			/>
			<ButtonWrapper>
				<Button 
					onClick={getMatchingCountries}
				>
					Get Matches
				</Button>
			</ButtonWrapper>
			{matchingCountries && <ul>
				{matchingCountries.map(country => 
					<li key={country}>
						{country}
					</li>)}
			</ul>}
		</Question>
	 )
}

Question2.propTypes = {
	country: PropTypes.string.isRequired,
	matchingCountries: PropTypes.array.isRequired,
	setMatchingCountries: PropTypes.func.isRequired,
}