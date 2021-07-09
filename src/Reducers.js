import { combineReducers } from 'redux';
import { FETCH_USERS, DELETE_USER, POST_USER, SAVE_POST_DATA  } from './Constants'
const initState = [
   { 
        id: '', 
        firstName: '', 
        lastName: '', 
        email: ''
    }
]

const initPostState = {
    firstName: '', 
    lastName: '', 
    email: ''
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;
        case DELETE_USER:
            return state;
        default:
            return state;
    }
}

const postUserReducer = (state = initPostState, action) => {
    switch(action.type) {
        case POST_USER:
            return state;
        case SAVE_POST_DATA:
            return action.payload      
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    User: usersReducer,
    Post: postUserReducer
})