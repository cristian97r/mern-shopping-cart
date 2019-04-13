import * as Types from '../actions/types'

const initialState = {
    items: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case Types.GET_ITEMS: return {...state, items: action.payload, loading: false}
        case Types.DELETE_ITEM: return {...state, items: state.items.filter(item => item._id !== action.payload)}
        case Types.ADD_ITEMS: return {...state, items: [action.payload, ...state.items]}
        case Types.ITEM_LOADING: return {...state, loading: true} 
        default:
            return state
    }
}