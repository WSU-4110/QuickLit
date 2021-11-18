import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "../../../style/posts/Postfeed.scss"

import { Post } from "./Post"
import { AddPost } from "./AddPost"
import { addPost, removePost } from "../../store/actions/post"
import { Dispatch } from "redux"

const PostFeed: React.FC = () => {
  const posts: readonly IPost[] = useSelector(
    (state: PostsState) => state.posts,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const savePost = React.useCallback(
    (post: IPost) => dispatch(addPost(post)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Articles</h1>
      <AddPost savePost={savePost} />
      {posts.map((post: IPost) => (
        <Post
          key={post.id}
          post={post}
          removePost={removePost}
        />
      ))}
    </main>
  )
}

export default PostFeed