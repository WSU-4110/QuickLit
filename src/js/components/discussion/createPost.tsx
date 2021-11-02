import React  from 'react';
//@ts-ignore
import DefaultUserPic from "../../../assets/images/DefaultUserPic.jpeg";
//@ts-ignore
require("../../../style/discussion/createpost.scss");
export class CreatePost extends React.Component {
    render(){
        return(
            <div className = 'createPost'>
                <img id = "profilepic" src = {DefaultUserPic} alt = 'profile picture'/>
                <form action = "">
                <textarea id = 'post' name = 'post' rows = {5} cols = {40} placeholder = 'What are you feeling' maxLength = {300}></textarea>
                <br/>
                <button id = "postButton" form = 'post' type = 'submit'>Publish</button>
                </form>
            </div>
        )
    }
}