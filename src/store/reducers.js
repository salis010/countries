import { SELECT_COUNTRY, SET_COUNTRY_DATA, APPLY_FILTER } from './action-types'

const initialState = {
    countryData: '',
    filter: '',
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {

        case SELECT_COUNTRY:
            return ({ ...state, country: action.payload})

        case SET_COUNTRY_DATA:
            return ({ ...state, countryData: action.payload})
        
        case APPLY_FILTER:
            return ({ ...state, filter: action.payload})
        
        default:
            return state
    }
}