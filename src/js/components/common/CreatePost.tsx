import React from 'react';
import { getUser, isSignedIn } from "../../util/AuthUtility";
import { BACKEND_BASE_URL } from "../../util/Constants";
import { authenticatedHttpPost } from "../../api/Client"

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

    const [loadingState, setLoading] = React.useState<RequestState>({
        loading: false,
        error: false,
        isSuccess: false
    })

    const handleChange: any = (event: any) => {
        SetPostState({
            ...postState,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit: any = (e: any) => {
        e.preventDefault();
        if (postState.postBody.trim()) {
            authenticatedHttpPost(BACKEND_BASE_URL + '/authenticated/post', postState);
        }
    }

    return (
        <div className="create-post-container">
            <form
                className="create-post"
                onSubmit={handleSubmit}
            >
                <h4>Create a Post</h4>
                <div className="create-post-body-container">
                    <input
                        type="text"
                        name="postBody"
                        value={postState.postBody}
                        className="post-body-input"
                        onChange={handleChange}
                        maxLength={1024}
                        required
                    />
                </div>
                <div className="create-post-book-container">
                    <input
                        type="text"
                        name="postBook"
                        value={postState.bookID}
                        placeholder="Tag a book to your post"
                        className="post-book-input"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Publish Post</button>
            </form >
        </div >
    )
}

export default CreatePost;