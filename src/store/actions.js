import { 
    SELECT_COUNTRY, 
    SET_COUNTRY_DATA, 
    MATCH_COUNTRIES, 
    SET_ALL_COUNTRIES, 
    SET_FILTERED_COUNTRIES,
    SET_WIN,
    SET_BALANCE,
    SET_LINE_RESULT,
    SET_NAME,
    SET_EMAIL,
    SET_PASSWORD,
    SET_FORM_VALID,
    SET_LOGIN_NAME,
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD,
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

//registration
export const setName = name => ({ type: SET_NAME, payload: name })
export const setEmail = email => ({ type: SET_EMAIL, payload: email })
export const setPassword = password => ({ type: SET_PASSWORD, payload: password })
export const setFormValid = isFormValid => ({ type: SET_FORM_VALID, payload: isFormValid })

//login
export const setLoginName = email => ({ type: SET_LOGIN_NAME, payload: email })
export const setLoginEmail = email => ({ type: SET_LOGIN_EMAIL, payload: email })
export const setLoginPassword = password => ({ type: SET_LOGIN_PASSWORD, payload: password })
