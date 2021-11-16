import axios from 'axios';
import {ADD_POST, GET_POST, GET_POSTS, POST_ERROR, } from './types';

// Get Posts
export const getPosts = () => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    try {
        const res = await axios.get('/api/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    } catch (error:any) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.data.msg, status: error.response.status }
        })
    }
}
// Get Post
export const getPost = (id: any) => async (dispatch: (arg0: { type: any; payload: any; }) => void) => {
    try {
        const res = await axios.get(`/api/posts/${id}`);

        dispatch({
            type: GET_POST,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.data.msg, status: error.response.status }
        })
    }
}

// Add Post
export const addPost = (formData: any) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post(`/api/posts`, formData, config);

        dispatch({
            type: ADD_POST,
            payload: res.data
        });

    } catch (error:any) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.data.msg, status: error.response.status }
        })
    }
}