import { fieldStatus } from '../../constants'
import { 
    SET_LOGIN_NAME,
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD, 
} from '../action-types'

const initialState = {
    name: '',
    email: '',
    password: '',
}


export const loginReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_LOGIN_NAME:
            return ({ ...state, name: action.payload })

        case SET_LOGIN_EMAIL:
            return ({ ...state, email: action.payload })
        
        case SET_LOGIN_PASSWORD:
            return ({ ...state, password: action.payload })
        
        default:
            return state
    }
}
