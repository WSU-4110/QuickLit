import DefaultUserPic from "../../../assets/images/DefaultUserPic.jpeg";
import {useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../../util/Constants";
import {isSignedIn, getUser} from "../../util/AuthUtility"
import { authenticatedHttpGet } from "../../api/Client";

require("../../../style/profile/ProfilePage.scss");

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
    
    useEffect( () => {
    if(isSignedIn()){
        fetchProfile(setProfile);    
    } else{
        console.log("Not Signed In");
    }   
   }, []);
    
    return (!isSignedIn()? <div>You are not signed in</div> : 
        <div className="profile-container">  
            <div className="profile-hero">
                <img src={DefaultUserPic} alt="profile picture"/>
                <br/>
                <div className="details-container">
                    <div>
                        <h3>{profile?.name}</h3>
                        <h4>{(profile?.username)}</h4>
                    </div>   
                    <p>{profile.bio}</p>
                    <p>currently reading: {profile?.currentlyReading}</p>
                </div>
                <div className="bookshelf-container">
                    <div>My Bookshelf</div>
                    { profile?.bookShelf?.map( book => <div className="bookshelf-item" key={book}>{book}</div>) }   
                </div>
            </div>  
        </div>            
    );
}

async function fetchProfile(setProfileHook: any){
    const user = getUser();
    if(!isSignedIn() || !user){
        console.log(BACKEND_BASE_URL);
    }
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