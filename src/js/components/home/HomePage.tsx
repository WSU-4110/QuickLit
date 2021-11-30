import { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../../util/Constants";
import { authenticatedHttpGet } from "../../api/Client"
import CreatePost from "../common/CreatePost"

//@ts-ignore
import Avatar0 from "../../../assets/images/YellowGlasses.png";
//@ts-ignore
import Avatar1 from "../../../assets/images/DefaultUserPic.jpeg"
//@ts-ignore
import Avatar2 from "../../../assets/images/GirlBrownHair.png"
//@ts-ignore
import Avatar3 from "../../../assets/images/ManBaldSunglasses.png"
//@ts-ignore
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
    isSuccess: boolean;
}

const avatarArray = [Avatar0, Avatar1, Avatar2, Avatar3, Avatar4];


export default function Home() {
    const [posts, setPosts] = useState<PostList>([]);

    useEffect(() => {
        fetchpostsForHomePage(setPosts);
    }, []);

    return (
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

async function fetchpostsForHomePage(setPostsHook: (posts: Post[]) => void) {
    const user = getUser();
    const responseJson = await authenticatedHttpGet(`${BACKEND_BASE_URL}/authenticated/post/get/${user.username}`);

    setPostsHook(responseJson);
}
