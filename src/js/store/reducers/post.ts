import { ADD_POST, GET_POST, GET_POSTS, POST_ERROR } from '../actions/types';

const initialState = {
    posts: [],
    post: null,
    error: {},
    loading: true
}

export default function (state = initialState, action: { type: any; payload: any; }) {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false
            }
        case GET_POST:
            return {
                ...state,
                post: payload,
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                // setting 'payload' first will set new posts first in UI
                posts: [payload, ...state.posts],
                loading: false
            }
        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
}