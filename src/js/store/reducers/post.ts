import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: [
        {
            id: 1,
            title: "post 1 - posts[] state",
            text:
              "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
          },
          {
            id: 2,
            title: "post 2 - posts[] state",
            text:
              "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
          },
    ],
    post:
    {
      id: 3,
      title: "post 3 - post state",
      body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
    error: {},
    loading: true
}

const reducer = (
    state: PostsState = initialState,
    action: PostAction
    ): PostsState => {
        switch (action.type) {
          case actionTypes.ADD_POST:
            const newPost: IPost = {
              id: Math.random(), // not really unique
              title: action.post.title,
              text: action.post.text,
            }
            return {
              ...state,
              posts: state.posts.concat(newPost),
            }              
        }
        return state
    }
      
export default reducer