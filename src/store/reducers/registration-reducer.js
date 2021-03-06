import { fieldStatus } from '../../constants'
import { checkOtherFieldsValidity } from './check-other-fields-validity'
import { 
    SET_NAME, 
    SET_EMAIL,
    SET_PASSWORD, 
    SET_REGISTRATION_SUCCESSFUL_MESSAGE
} from '../action-types'

const initialState = {
    name: { 
        value: '',
        status: fieldStatus.notVisited,
        isValid: false,
    },
    email: { 
        value: '',
        status: fieldStatus.notVisited,
        isValid: false,
    },
    password: { 
        value: '',
        status: fieldStatus.notVisited,
        isValid: false,
    },
    isFormValid: false,
    registrationSuccessfulMessage: '',
}


export const registrationReducer = (state = initialState, action) => {
    
    const field = action.payload

    switch(action.type) {
        
        case SET_NAME:
            return ({ 
                ...state, 
                name: field, 
                isFormValid: field.isValid &&  checkOtherFieldsValidity(state, 'name') 
            })

        case SET_EMAIL:
            return ({ 
                ...state, 
                email: field, 
                isFormValid: field.isValid &&  checkOtherFieldsValidity(state, 'email') 
            })
        
        case SET_PASSWORD:
            return ({ 
                ...state, 
                password: field, 
                isFormValid: field.isValid &&  checkOtherFieldsValidity(state, 'password') 
            })

        case SET_REGISTRATION_SUCCESSFUL_MESSAGE:
            return ({
                ...state,
                registrationSuccessfulMessage: action.payload
            })
        
        default:
            return state
    }
}
