import * as React from "react"

type Props = {
  savePost: (post: IPost | any) => void
}

export const AddPost: React.FC<Props> = ({ savePost }) => {
  const [post, setPost] = React.useState<IPost | {}>()

  const handlePostData = (e: React.FormEvent<HTMLInputElement>) => {
    setPost({
      ...post,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewPost = (e: React.FormEvent) => {
    e.preventDefault()
    savePost(post)
  }

  return (
    <form onSubmit={addNewPost} className="Add-Post">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handlePostData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handlePostData}
      />
      <button disabled={post === undefined ? true : false}>
        Add Post
      </button>
    </form>
  )
}