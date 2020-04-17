import { connect } from 'react-redux'
import { setLoginName, setLoginEmail, setLoginPassword } from '../../../store/actions'
import { Question6 as Component } from './question6'


const mapStateToProps = ({ loginState }) => 
    ({
        name: loginState.name,
        email: loginState.email,
        password: loginState.password,
    })

const mapDispatchToProps = dispatch => ({
        setLoginName: name => dispatch(setLoginName(name)),
        setLoginEmail: email => dispatch(setLoginEmail(email)),
        setLoginPassword: password => dispatch(setLoginPassword(password)),
})

export const Question6 = connect(mapStateToProps, mapDispatchToProps)(Component)
