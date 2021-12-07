import React from 'react';
import { BACKEND_BASE_URL } from "../../util/Constants";
import { authenticatedHttpPost } from "../../api/Client"
import BookIcon from "../../../assets/images/BookIcon.png"

interface Post {
    postBody: string;
    bookID?: string;
}

interface RequestState {
    loading: boolean;
    error: boolean;
    isSuccess: boolean;
}


const CreatePost: any = () => {
    const [postState, SetPostState] = React.useState<Post>({
        postBody: '',
        bookID: ''
    })

    const [requestState, setRequestState] = React.useState<RequestState>({
        loading: false,
        error: false,
        isSuccess: false
    })

    const [bookTagVisibility, setVisiblity] = React.useState({
        visibility: false
    })

    const handleChange: any = (event: any) => {
        SetPostState({
            ...postState,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit: any = (event: any) => {
        event.preventDefault();
        if (postState.postBody.trim()) {
            authenticatedHttpPost(BACKEND_BASE_URL + '/authenticated/post', postState).then(response => {
            const status: number = response.status as number;
                if (status === 200) {
                    setRequestState({
                        loading: false,
                        error: false,
                        isSuccess: true
                    })
                }
                else {
                    setRequestState({
                        loading: false,
                        error: true,
                        isSuccess: false
                    })
                }
            });
            SetPostState({
                postBody: '',
                bookID: ''
            })
        }
    }

    return (
        <div className="all-create-post-compoenents">
            {requestState.isSuccess ?
                <div className="success-post-creation">
                    <p>Post sucessfuly submitted!</p>
                </div>
                :
                requestState.error ?
                    <div className="error-post-creation">
                        <p>Error: Post not submitted</p>
                    </div>
                    : <div></div>
            }
            <div className="create-post-container">
                <form
                    className="create-post"
                    onSubmit={handleSubmit}
                >   <div className="create-post-header">
                        <h4>Create a Post</h4>
                    </div>
                    <div className="create-post-body-container">
                        <textarea
                            name="postBody"
                            value={postState.postBody}
                            className="post-body-input"
                            placeholder="Share your thoughts on a book"
                            onChange={handleChange}
                            maxLength={1024}
                            required
                        />
                        {bookTagVisibility.visibility &&
                            <div>
                                <textarea
                                    name="bookID"
                                    value={postState.bookID}
                                    placeholder="Tag a book to your post"
                                    className="post-book-input"
                                    onChange={handleChange}
                                />
                            </div>
                        }
                    </div>
                    <div className="create-post-footer">
                        <div className="create-post-book-tag">
                            <button
                                onClick={() => { setVisiblity({ visibility: !bookTagVisibility.visibility }) }}
                                className="book-tag-button"
                                type="button"
                                title="Tag a book to your post"
                            >
                                <img className="book-icon" src={BookIcon} />
                            </button>
                        </div>
                        <div className="publish-post-btn">
                            <button
                                type="submit"
                                title="Publish your post"
                            >
                                Publish Post
                            </button>
                        </div>
                    </div>
                </form >
            </div>
        </div>
    )
}

export default CreatePost;