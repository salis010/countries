import { 
    SET_BALANCE, 
    SET_WIN,
    SET_LINE_RESULT, 
} from '../action-types'

const initialState = {
    balance: 20,
    win: 0,
    lineResult: [0, 1, 2],
}

export const slotReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case SET_BALANCE:
            return ({ ...state, balance: action.payload })

        case SET_WIN:
            return ({ ...state, win: action.payload })
        
        case SET_LINE_RESULT:
            return ({ ...state, lineResult: action.payload })
        
        default:
            return state
    }
}
