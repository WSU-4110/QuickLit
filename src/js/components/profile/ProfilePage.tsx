import React  from 'react';
//@ts-ignore
import DefaultUserPic from "../../../assets/images/DefaultUserPic.jpeg";


require("../../../style/profile/ProfilePage.scss");

/* interface userprofile {
    user_id: string[];
    username?: string[];
    email?: string[];
    profileImage?: string;
    msg?:string[];
}
interface userprofileState{
    user_id: string[];
    username?: string[];
    email?: string[];
    profileImage?: string;
    msg?:string[];
} */
export function UserProfile(){
    /* constructor(props: any){
        super(props);
        this.state={
            user_id:this.props.user_id,
            username:this.props.username,
            email:this.props.email,
            profileImage:this.props.profileImage,
            msg:this.props.msg,
        }
    }
render(){

    if(this.state.profileImage){
        var profilePic=this.state.profileImage;
    }else{
         profilePic=DefaultUserPic;
    } */
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