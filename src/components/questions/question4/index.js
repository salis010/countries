import { connect } from 'react-redux'
import { setBalance, setWin, setLineResult } from '../../../store/actions'
import { Question4 as Component } from './question4'


const mapStateToProps = ({ slotState }) =>
    ({
        balance: slotState.balance,
        win: slotState.win,
        lineResult: slotState.lineResult,
    })

const mapDispatchToProps = dispatch => {
    return ({    
        setBalance: balance => dispatch(setBalance(balance)),
        setWin: win => dispatch(setWin(win)),
        setLineResult: lineResult => dispatch(setLineResult(lineResult)),
    })
}

export const Question4 = connect(mapStateToProps, mapDispatchToProps)(Component)
