import { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../../util/Constants";
import { authenticatedHttpGet } from "../../api/Client"
import CreatePost from "../common/CreatePost"

import Avatar0 from "../../../assets/images/YellowGlasses.png";
import Avatar1 from "../../../assets/images/DefaultUserPic.jpeg"
import Avatar2 from "../../../assets/images/GirlBrownHair.png"
import Avatar3 from "../../../assets/images/ManBaldSunglasses.png"
import Avatar4 from "../../../assets/images/WomanShortHairDefault.png"
import { getUser } from "../../util/AuthUtility";


require("../../../style/homePage/homePage.scss");

interface Post {
    author: string;
    postID: string;
    attributes: {
        postBody: string;
    };
    creationDate: string;
    bookID?: string;
}

type PostList = Post[];

interface RequestState {
    isLoading: boolean;
    isError: boolean;
}

const avatarArray = [Avatar0, Avatar1, Avatar2, Avatar3, Avatar4];


export default function Home() {
    const [posts, setPosts] = useState<PostList>([]);
    const [requestState, setRequestState] = useState<RequestState>({
        isLoading: true,
        isError: false
    });
    useEffect(() => {
        fetchpostsForHomePage(setPosts, setRequestState);
    }, []);

    return ( requestState.isLoading? <div>loading</div>:
            requestState.isError? <div>Error</div>:
        <div className="all-posts-wrapper">
            <CreatePost />
            {
                posts.map(post => {
                    return (
                        <div className="post-container">
                            <img src={avatarArray[Math.floor(Math.random() * 5)]} />
                            <div className="body-content">
                                <div className="post-author">
                                    {post.author}
                                </div>
                                <div className="post-body">
                                    {post.attributes.postBody}
                                </div>
                                <div className="post-bookID">
                                    {post.bookID}
                                </div>
                            </div>

                        </div>
                    );
                }
                )
            }
        </div>
    );
}

async function fetchpostsForHomePage(setPostsHook: (posts: Post[]) => void, setRequestStateHook: (RequestState: RequestState) => void) {
    const user = getUser();
    authenticatedHttpGet(`${BACKEND_BASE_URL}/authenticated/post/get/${user.username}`).then( responseJson =>{
    
        if(responseJson || Array.isArray(responseJson)){
            setPostsHook(responseJson);
            
            setRequestStateHook({
                isLoading: false,
                isError: false
            })
        }else{
            setRequestStateHook({
                isLoading: false,
                isError: true
            })
        }
    });
    
}
