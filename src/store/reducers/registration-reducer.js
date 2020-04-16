import { initializeRegistrationState } from '../../components/questions/question5/utils'
import { 
    SET_NAME, 
    SET_EMAIL,
    SET_PASSWORD, 
    SET_FORM_VALID
} from '../action-types'

const initialState = initializeRegistrationState()

export const registrationReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case SET_NAME:
            return ({ ...state, name: action.payload })

        case SET_EMAIL:
            return ({ ...state, email: action.payload })
        
        case SET_PASSWORD:
            return ({ ...state, password: action.payload })
        case SET_FORM_VALID:
            return ({ ...state, isFormValid: action.payload })
        
        default:
            return state
    }
}
