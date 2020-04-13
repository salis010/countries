import { connect } from 'react-redux'
import { setCountry, setCountryData } from '../../../store/actions'
import { Question5 as Component } from './question5'

const mapStateToProps = state =>
    ({
        country: state.country,
        countryData: state.countryData,
    })

const mapDispatchToProps = dispatch => ({
        setCountry: country => dispatch(setCountry(country)),
        setCountryData: countryData => dispatch(setCountryData(countryData)),
})

export const Question5 = connect(mapStateToProps, mapDispatchToProps)(Component)
