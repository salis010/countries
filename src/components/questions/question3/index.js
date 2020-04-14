import { connect } from 'react-redux'
import { setCountry, setMatchingCountries } from '../../../store/actions'
import { Question3 as Component } from './question3'

const mapStateToProps = state => ({
        country: state.country,
        matchingCountries: state.matchingCountries,
    })

const mapDispatchToProps = dispatch => ({
        setCountry: country => dispatch(setCountry(country)),
        setMatchingCountries: matchingCountries => dispatch(setMatchingCountries(matchingCountries)),
})

export const Question3 = connect(mapStateToProps, mapDispatchToProps)(Component)
