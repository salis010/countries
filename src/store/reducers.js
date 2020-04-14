import { SELECT_COUNTRY, SET_COUNTRY_DATA, MATCH_COUNTRIES } from './action-types'

const initialState = {
    country: '',
    countryData: [],
    matchingCountries: [],
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {

        case SELECT_COUNTRY:
            return ({ ...state, country: action.payload })

        case SET_COUNTRY_DATA:
            return ({ ...state, countryData: action.payload })

        case MATCH_COUNTRIES:
            return ({ ...state, matchingCountries: action.payload })
        
        default:
            return state
    }
}