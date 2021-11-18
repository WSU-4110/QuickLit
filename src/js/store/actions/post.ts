import axios from 'axios';
import * as actionTypes from './actionTypes';

// Get Posts

// Get Post
/* export const getPost = (id: any) => async (dispatch: (arg0: { type: any; payload: any; }) => void) => {
    try {
        const res = await axios.get('/api/posts');

        dispatch({
            type: actionTypes.GET_POSTS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.POST_ERROR,
            payload: { msg: error.response.data.msg, status: error.response.status }
        })
    } */

export function addPost(post: IPost){
    const action: PostAction = {
        type: actionTypes.ADD_POST,
        post,
    }
      return simulateHttpRequest(action)
}

export function removePost(post: IPost) {
    const action: PostAction = {
      type: actionTypes.REMOVE_POST,
      post,
    }
    return simulateHttpRequest(action)
  }
  
export function simulateHttpRequest(action: PostAction) {
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(action)
      }, 500)
    }
  }