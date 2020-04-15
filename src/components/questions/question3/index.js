import { connect } from 'react-redux'
import { setCountry, setAllCountries, setFilteredCountries } from '../../../store/actions'
import { Question3 as Component } from './question3'

const mapStateToProps = ({ countriesState }) => ({
        country: countriesState.country,
        allCountries: countriesState.allCountries,
        filteredCountries: countriesState.filteredCountries,
    })

const mapDispatchToProps = dispatch => ({
        setCountry: country => dispatch(setCountry(country)),
        setAllCountries: allCountries => dispatch(setAllCountries(allCountries)),
        setFilteredCountries: filteredCountries => dispatch(setFilteredCountries(filteredCountries)),
})

export const Question3 = connect(mapStateToProps, mapDispatchToProps)(Component)
