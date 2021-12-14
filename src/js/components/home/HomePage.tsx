
import { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../../util/Constants";
import { authenticatedHttpGet } from "../../api/Client"
import CreatePost from "../common/CreatePost"

import BookIcon from "../../../assets/images/BookIcon.png"
import { getUser } from "../../util/AuthUtility";
import Post from "../common/Post";


require("../../../style/homePage/homePage.scss");

interface Post {
    Author: string;
    PostId: string;
    attributes: {
        postBody: "",
        comments?: {
            commentAuthor: string;
            commentBody: string;
        }[];
        likes?: string[];
    };
    creationDate: string;
    bookID?: string;
}

type PostList = Post[];

interface RequestState {
    isLoading: boolean;
    isError: boolean;
}

export default function Home() {
    const [posts, setPosts] = useState<PostList>([]);
    const [requestState, setRequestState] = useState<RequestState>({
        isLoading: true,
        isError: false
    });
    useEffect(() => {
        fetchpostsForHomePage(setPosts, setRequestState);
    }, []);

    return (
        requestState.isLoading ?
            <div className="loading-homefeed-status">
                <h1>Loading Homefeed...</h1>
            </div>
            :
            requestState.isError ?
                <div className="error-homefeed-status">
                    <h1>Error: Something went wrong. (Hint: You might not be logged in)</h1>
                </div>
                :
                <div className="all-component-wrapper">
                    <div className="all-posts-wrapper">
                        <CreatePost />
                        {
                            posts.map(post => {
                                return (
                                    <Post
                                        postID={post.PostId}
                                        attributes={post.attributes}
                                        creationDate={post.creationDate}
                                        bookID={post.bookID}
                                        author={post.Author}
                                    />
                                );
                            }
                            )
                        }
                    </div>
                </div>
    );
}

async function fetchpostsForHomePage(setPostsHook: (posts: Post[]) => void, setRequestStateHook: (RequestState: RequestState) => void) {
    const user = getUser();
    authenticatedHttpGet(`${BACKEND_BASE_URL}/authenticated/post/user/${user.username}`).then(responseJson => {

        if (responseJson || Array.isArray(responseJson)) {
            setPostsHook(responseJson);

            setRequestStateHook({
                isLoading: false,
                isError: false
            })
        } else {
            setRequestStateHook({
                isLoading: false,
                isError: true
            })
        }
    });

}
