//@ts-ignore
import DefaultUserPic from "../../../assets/images/DefaultUserPic.jpeg";


require("../../../style/profile/ProfilePage.scss");

export function UserProfile(){
    
    return (
        <div className="profile-container">
            <div className="profile-hero">
                <img src={DefaultUserPic} alt="profile pic"/>
                <div className="details-container">
                    <header>
                        <p>@owenmille</p>
                        <button>3 <small>posts</small></button>
                        <button>9 <small>books</small></button>
                        <h1>Owen Miller</h1>
                    </header>   
                    <div>
                        <p>Hello everyone! just made my account so feel free to add me as a friend :)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
   export default UserProfile