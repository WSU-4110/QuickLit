import { createStore, applyMiddleware, Store } from "redux"
import rootReducer from './reducers/index'
import reducer from "../store/reducers/post"
import thunk from "redux-thunk"

const initialState = {}

const store: Store<PostsState, PostAction> & {
    dispatch: DispatchType
  } = createStore(reducer, applyMiddleware(thunk))

export default store