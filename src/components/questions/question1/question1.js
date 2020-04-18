import React from 'react'
import PropTypes from 'prop-types'
import { Question } from '../../question'
import { InputSimple } from '../../input-components/input-simple/index'
import { Button } from '../../common'
import { baseUrl } from '../../../constants'


export const Question1 = ({ 
		country, countryData, 
		setCountry, setCountryData 
	}) => {

	const getCountry = () =>
		fetch(`${baseUrl}/question1/country/${country}`)
			.then(response => response.json())
			.then(data => setCountryData(data))
			.catch(err => console.log(err))

	const handleChange = country => setCountry(country)
	 
	return ( 
		<Question questionNumber={1}>			
			<InputSimple 
				 label='Country'
				 text={country}
				 setFieldValue={handleChange}
			/>
			{countryData && <ul>
				{Object.keys(countryData).map(item => 
					<li key={item}>
						{item}: {countryData[item]}
					</li>)}
			</ul>}
			<Button 
				onClick={getCountry}
			>
				Get Data
			</Button>
		</Question>
	 )
}

Question1.propTypes = {
	country: PropTypes.string.isRequired,
	countryData: PropTypes.object.isRequired,
	setCountry: PropTypes.func.isRequired,
	setCountryData: PropTypes.func.isRequired,
}
