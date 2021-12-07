import { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { authenticatedHttpGet } from "../../api/Client";
import DefaultUserPic from "../../../assets/images/DefaultUserPic.jpeg";
import { BACKEND_BASE_URL } from "../../util/Constants";
import BookshelfItem from "../profile/BookshelfItem";

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

    useEffect( () => {
        fetchProfile(username, setProfile);    
   }, []);

   return (
    <div className="profile-container">  
        <div className="profile-hero">
            <div className="d">
            <img src={DefaultUserPic}/>
                <div className="details">
                    <h3>{profile?.name}</h3>
                    <h4>{(profile?.username)}</h4>
                    <p>{profile.bio}</p>
                    <p>currently reading: {profile?.currentlyReading}</p>                    
                </div>   
                <p>{profile.bio}</p>
                <p>currently reading: {profile?.currentlyReading}</p>
            </div>
            <div className="bookshelf-container">
                { profile?.bookShelf?.map( book => 
                <div className="bookshelf-item" key={book}>
                    <BookshelfItem 
                    id={book}
                    />
                </div>) }   
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
