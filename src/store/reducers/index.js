import { combineReducers } from 'redux'
import { countriesReducer } from './countries-reducer'
import { slotReducer } from './slot-reducer'
import { registrationReducer } from './registration-reducer'

export const rootReducer = combineReducers({
    countriesState: countriesReducer,
    slotState: slotReducer,
    registrationState: registrationReducer,
})
