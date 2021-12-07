import { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { authenticatedHttpGet } from "../../api/Client";
import DefaultUserPic from "../../../assets/images/DefaultUserPic.jpeg";
import { BACKEND_BASE_URL } from "../../util/Constants";
import BookshelfItem from "../profile/BookshelfItem";
import Post from "../common/Post";

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

export default function UserPage() {
    const username = useLocation().state;

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
        fetchProfile(username, setProfile);    
        fetchpostsForUserPage(setPosts, username);

   }, []);

   return (
        <div className="profile-container">  
            <div className="profile-hero">
                <div className="details-card">
                    <img src={DefaultUserPic}/>
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

async function fetchProfile(username: any, setProfileHook: any){

    const profileCallResponse =  await authenticatedHttpGet(`${BACKEND_BASE_URL}/authenticated/userdata/all/${username}`);
    
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

async function fetchpostsForUserPage(setPostsHook: (posts: Post[]) => void, username: any) {
    authenticatedHttpGet(`${BACKEND_BASE_URL}/authenticated/post/user/${username}`).then(responseJson => {

        if (responseJson || Array.isArray(responseJson)) {
            setPostsHook(responseJson);
        }
    });

}