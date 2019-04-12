import uuid from 'uuid'
import * as Types from '../actions/types'

const initialState = {
    items: [
        {id: uuid(), name: "Eggs"},
        {id: uuid(), name: "Milk"},
        {id: uuid(), name: "Water"},
        {id: uuid(), name: "Candy"}
    ]
}

export default function(state = initialState, action){
    switch(action.type){
        case Types.GET_ITEMS:
        return {
            ...state
        }
        default:
            return state
    }
}