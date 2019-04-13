import axios from 'axios'

import * as Types from './types'

export const getItems = () => dispatch => {
    dispatch(setItemsLoading())
    axios.get('/api/items')
    .then( res => {
        dispatch({
            type: Types.GET_ITEMS,
            payload: res.data
        })
    })
}

export const addItem = item => dispatch => {
    axios.post('/api/items', item)
    .then(res => dispatch ({
        type: Types.ADD_ITEMS,
        payload: res.data
    }))
}

export const deleteItem = id => dispatch => {
    axios.delete('/api/items/' + id)
    .then(res => dispatch ({
        type: Types.DELETE_ITEM,
        payload: id
    }))
}

export const setItemsLoading = () => {
    return {
        type: Types.ITEM_LOADING
    }
}