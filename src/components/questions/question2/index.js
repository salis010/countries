import { connect } from 'react-redux'
import { setCountry, setMatchingCountries } from '../../../store/actions'
import { Question2 as Component } from './question2'

const mapStateToProps = ({ countriesState }) => ({
        country: countriesState.country,
        matchingCountries: countriesState.matchingCountries,
    })

const mapDispatchToProps = dispatch => ({
        setCountry: country => dispatch(setCountry(country)),
        setMatchingCountries: matchingCountries => dispatch(setMatchingCountries(matchingCountries)),
})

export const Question2 = connect(mapStateToProps, mapDispatchToProps)(Component)
