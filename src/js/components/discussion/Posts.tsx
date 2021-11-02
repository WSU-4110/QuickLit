import React  from 'react';
//@ts-ignore
import DefaultUserPic from "../../../assets/images/DefaultUserPic.jpeg";
//@ts-ignore
import testBookCover from "../../../assets/images/testbookcover.jpeg";
//@ts-ignore
require("../../../style/discussion/post.scss");
export class Posts extends React.Component {
    render(){
        return(
            <div className = 'posts'>
                <img src = {DefaultUserPic} alt = "profile picture" id = "profilepic"/>
                <img src = {testBookCover} alt = "bookpicture" id = "bookpicture"/>
                <p id = "posttext">Orphaned Harry Potter has been living a dog’s life with his horrible relatives. He sleeps in the broom cupboard under the stairs and is treated as a slave by his aunt and uncle. On his eleventh birthday, mysterious missives begin arriving for him, culminating eventually in the arrival of a giant named Hagrid, who has come to escort him to the Hogwarts School of Witchcraft and Wizardry. Harry learns that his parents died saving him from an evil sorcerer and that he himself is destined to be a wizard of great power. Harry’s astonished introduction to the life of wizardry starts with his purchase, under Hagrid’s guidance, of all the tools of an aspiring sorcerer: wand, robes, cauldron, broomstick, owl. </p>             
            </div>
        )
    }
}