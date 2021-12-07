import {useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../../util/Constants";
import {getUser} from "../../util/AuthUtility"
import { authenticatedHttpGet } from "../../api/Client";
import EditBio from "./EditBio";
import Avatar3 from "../../../assets/images/ManBaldSunglasses.png"
import BookshelfItem from "./BookshelfItem";
import Post from "../common/Post";

require("../../../style/profile/ProfilePage.scss");

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
interface profileStructure {
    username: string | null | undefined,
        [name: string]: any,
        bio: string | null | undefined,
        friendslist: string | null | undefined,
        currentlyReading: string | null | undefined,
        bookShelf: []
}

export default function UserProfile(this: any){
    
    const [profile, setProfile] = useState<profileStructure>({
        username: "",
        name: "",
        bio: "",
        friendslist: "",
        currentlyReading: "",
        bookShelf: []
    });
    const [posts, setPosts] = useState<PostList>([]);


    useEffect( () => {
        fetchProfile(setProfile);    
        fetchpostsForProfilePage(setPosts);

   }, []);
    
    return (
        <div className="profile-container">  
            <div className="profile-hero">
                <div className="details-card">
                    <img src={Avatar3}/>
                    <div className="details">
                        <div className="common-name">
                            {(profile?.name)}
                        </div>
                        <div className="username">
                            {profile?.username}
                        </div>
                        <div className="bio">
                            {profile.bio}
                        </div>
                    </div>   
                </div>
                    <EditBio/>
                <div className="bookshelf-container">
                    { 
                        profile?.bookShelf?.map( book => 
                            <div className="bookshelf-item" key={book}>
                                <BookshelfItem 
                                id={book}
                                />
                            </div>
                        ) 
                    }   
                </div>

                <div className="posts-container">
                    { 
                        posts.map(post => {
                            return (
                                <Post
                                    author={post.Author}
                                    postID={post.PostId}
                                    attributes={post.attributes}
                                    creationDate={post.creationDate}
                                    bookID={post.bookID}
                                />
                            );
                        }
                        )
                    }   
                </div>
            </div>  
        </div>            
    );
}

async function fetchProfile(setProfileHook: any){
    const user = getUser();

    const profileCallResponse =  await authenticatedHttpGet(`${BACKEND_BASE_URL}/authenticated/userdata/all/${user.username}`);
    
    const formattedData = {
        username: profileCallResponse.Username,
        name: profileCallResponse.Name,
        bio: profileCallResponse.bio,
        friendslist: profileCallResponse.friendsList,
        currentlyReading: profileCallResponse.currentlyReading,
        bookShelf: profileCallResponse.bookShelf
    }
    setProfileHook(formattedData);
}

async function fetchpostsForProfilePage(setPostsHook: (posts: Post[]) => void) {
    const user = getUser();
    authenticatedHttpGet(`${BACKEND_BASE_URL}/authenticated/post/user/${user.username}`).then(responseJson => {

        if (responseJson || Array.isArray(responseJson)) {
            setPostsHook(responseJson);
        }
    });

}
