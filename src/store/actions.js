import { 
    SELECT_COUNTRY, 
    SET_COUNTRY_DATA, 
    MATCH_COUNTRIES, 
    SET_ALL_COUNTRIES, 
    SET_FILTERED_COUNTRIES,
    SET_WIN,
    SET_BALANCE,
    SET_LINE_RESULT,
} from './action-types'

//countries
export const setCountry = country => ({ type: SELECT_COUNTRY, payload: country })
export const setCountryData = countryData => ({ type: SET_COUNTRY_DATA, payload: countryData })
export const setMatchingCountries = matchingCountries => ({ type: MATCH_COUNTRIES, payload: matchingCountries })
export const setAllCountries = allCountries => ({ type: SET_ALL_COUNTRIES, payload: allCountries })
export const setFilteredCountries = filteredCountries => ({ type: SET_FILTERED_COUNTRIES, payload: filteredCountries})

//slot
export const setBalance = balance => ({ type: SET_BALANCE, payload: balance})
export const setWin = win => ({ type: SET_WIN, payload: win })
export const setLineResult = lineResult => ({ type: SET_LINE_RESULT, payload: lineResult })
