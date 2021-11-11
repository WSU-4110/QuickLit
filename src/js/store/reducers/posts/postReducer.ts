import { Reducer, Action } from 'redux'
import { Map, fromJS } from 'immutable'

import { PostState } from './postState'
import { PostAction } from './postAction'

import { PostActionType } from '../../../util/postActionType'

export let postReducer = (state = Map(new PostState()), action: PostAction) => {
    const { payload } = action
    switch (action.type) {
      
      case PostActionType.ADD_POST:
        return state
          .setIn(['userPosts', payload.uid, payload.post.id], fromJS({...payload.post}))

      case PostActionType.DELETE_POST:
        return state
          .deleteIn(['userPosts', payload.uid, payload.id])
  
      case PostActionType.HAS_MORE_DATA_STREAM:
        return state
          .setIn(['stream', 'hasMoreData'], true)
  
      case PostActionType.NOT_MORE_DATA_STREAM:
        return state
          .setIn(['stream', 'hasMoreData'], false)

      default:
        return state
  
    }
  }
  


const getPost = (state: Map<string, any>, userId: string, postId: string) => {
    return state.getIn(['post', 'userPosts', userId, postId])
}
export const postSelector = {
    getPost
}