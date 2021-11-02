import React  from 'react';
//@ts-ignore
import testBookCover from "../../../assets/images/testbookcover.jpeg";
import {CreatePost} from "./createPost"
import {Posts} from "./Posts"
require("../../../style/discussion/discussion.scss");
export default function DiscussionPage() {
    return(
        <div className = "discussion-container">
            <div className = "actualdiscussion">
                <div className = 'createPost'>
                <CreatePost/>
                </div>
                
                <div className = 'posts'>
                <Posts/>
                </div>
            </div>
            
        </div>
    )
}
