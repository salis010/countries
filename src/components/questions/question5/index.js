import { connect } from 'react-redux'
import { setName, setEmail, setPassword } from '../../../store/actions'
import { Question5 as Component } from './question5'


const mapStateToProps = ({ registrationState }) =>
    ({
        name: registrationState.name,
        email: registrationState.email,
        password: registrationState.password,
        isFormValid: registrationState.isFormValid,
    })

const mapDispatchToProps = dispatch => ({
        setName: name => dispatch(setName(name)),
        setEmail: email => dispatch(setEmail(email)),
        setPassword: password => dispatch(setPassword(password)),
})

export const Question5 = connect(mapStateToProps, mapDispatchToProps)(Component)
