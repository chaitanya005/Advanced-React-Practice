import  { SAVE_COMMENT, FETCH_COMMENTS, IS_LOGIN } from './types';
import axios from 'axios'

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
    const res = axios.get('http://jsonplaceholder.typicode.com/comments')
    
    return {
        type:  FETCH_COMMENTS,
        payload: res
    }
}

export function changeAuth(isLoggedIn) {
    return {
        type: IS_LOGIN,
        payload: isLoggedIn
    }
}