import { connect } from 'react-redux'
import { setCountry, setCountryData } from '../../../store/actions'
import { Question1 as Component } from './question1'

const mapStateToProps = state =>
    ({
        country: state.country,
        countryData: state.countryData,
    })

const mapDispatchToProps = dispatch => ({
        setCountry: country => dispatch(setCountry(country)),
        setCountryData: countryData => dispatch(setCountryData(countryData)),
})

export const Question1 = connect(mapStateToProps, mapDispatchToProps)(Component)
