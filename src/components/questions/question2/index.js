import { connect } from 'react-redux'
import { setCountry, setCountryData } from '../../../store/actions'
import { Question2 as Component } from './question2'

const mapStateToProps = state =>
    ({
        country: state.country,
        countryData: state.countryData,
    })

const mapDispatchToProps = dispatch => ({
        setCountry: country => dispatch(setCountry(country)),
        setCountryData: countryData => dispatch(setCountryData(countryData)),
})

export const Question2 = connect(mapStateToProps, mapDispatchToProps)(Component)
