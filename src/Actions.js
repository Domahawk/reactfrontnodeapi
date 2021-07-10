import axios from 'axios';
import { FETCH_USERS, DELETE_USER, POST_USER, SAVE_POST_DATA, API_LINK } from './Constants';

export const fetchUsers = () => {
    return async (dispatch) => {
        const response = await axios.get(`${API_LINK}users`)
        dispatch({
            type: FETCH_USERS,
            payload: response.data
        })
    }
}

export const removeUser = (id) => {
    return async (dispatch) => {
        await axios.delete(`${API_LINK}user/${id}`)
        dispatch({
            type: DELETE_USER
        })
        dispatch(fetchUsers())
    }
}

export const postUser = (data) => {
    return async (dispatch) => {
        await axios.post(`${API_LINK}post`, data)
        dispatch({
            type: POST_USER
        })
        dispatch(fetchUsers())
    }
}

export const savePostData = (data) => {
    return (dispatch, useState) => {
        dispatch({
            type: SAVE_POST_DATA,
            payload: data
        })
    } 
}