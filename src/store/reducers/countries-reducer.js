import { 
    SELECT_COUNTRY, 
    SET_COUNTRY_DATA, 
    MATCH_COUNTRIES, 
    SET_ALL_COUNTRIES, 
    SET_FILTERED_COUNTRIES 
} from '../action-types'

const initialState = {
    country: '',
    countryData: {},
    matchingCountries: [],
    allCountries: [],
    filteredCountries: [],
}

export const countriesReducer = (state = initialState, action) => {
    switch(action.type) {

        case SELECT_COUNTRY:
            return ({ ...state, country: action.payload })

        case SET_COUNTRY_DATA:
            return ({ ...state, countryData: action.payload })

        case MATCH_COUNTRIES:
            return ({ ...state, matchingCountries: action.payload })

        case SET_ALL_COUNTRIES:
            return ({ ...state, allCountries: action.payload, filteredCountries: action.payload })

        case SET_FILTERED_COUNTRIES:
            return ({ ...state, filteredCountries: action.payload })
        
        default:
            return state
    }
}
