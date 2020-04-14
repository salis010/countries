import { SELECT_COUNTRY, SET_COUNTRY_DATA, MATCH_COUNTRIES } from './action-types'

export const setCountry = country => ({ type: SELECT_COUNTRY, payload: country })
export const setCountryData = countryData => ({ type: SET_COUNTRY_DATA, payload: countryData })
export const setMatchingCountries = matchingCountries => ({ type: MATCH_COUNTRIES, payload: matchingCountries })
