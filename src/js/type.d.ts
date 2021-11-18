  interface IPost {
    id: number
    title: string
    text: string
/*     book:string
 */  }
  
  type PostsState = {
    posts: IPost[]
  }
  
  type PostAction = {
    type: string
    post: IPost
  }
  
  type DispatchType = (args: PostAction) => PostAction