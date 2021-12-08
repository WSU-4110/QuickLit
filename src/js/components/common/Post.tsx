import React, { useEffect, useState } from 'react';
import { BACKEND_BASE_URL } from "../../util/Constants";
import { authenticatedHttpPost } from "../../api/Client"
import BookIcon from "../../../assets/images/BookIcon.png"

import Avatar3 from "../../../assets/images/ManBaldSunglasses.png"
import { getUser } from '../../util/AuthUtility';
import { QuickLitUser } from '../../model/QuickLitUser';

require("../../../style/homePage/post.scss");

interface Props {
    author: string;
    postID: string;
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




const Post = (props: Props) => {
    
    const [likes,setLikes] = useState<string []>([]);
    const [isLikedByUser,setIsLikedByUser] = useState(false);

    const [comments,setComments] = useState<any>([]);
    const [commentInput,setCommentInput] = useState("");

    useEffect(() => {
        
        if(props.attributes.likes){
            const user: QuickLitUser = getUser();

            setLikes(props.attributes.likes);
            setIsLikedByUser(props.attributes.likes.includes(user.username))
        }
        if(props.attributes.comments){
            
            setComments(props.attributes.comments)
        }
    }, []);
    
    const publishLike = ()=>{
        const user: QuickLitUser = getUser();
        const requestInput = {
            author: user.username,
            postID: props.postID
        };
        authenticatedHttpPost(BACKEND_BASE_URL + '/authenticated/post/like', requestInput).then(response => {
            const status: number = response.status as number;
                if (status === 200) {
                    const index = likes.indexOf(user.username);
                    if (index > -1) {
                        likes.splice(index, 1);
                    } else {
                        likes.push(user.username);
                    }
                    setIsLikedByUser(likes.includes(user.username))
                }
            });
    }

    const publishComment = (event: any)=>{
        event.preventDefault();

        if(commentInput.trim()){
            const user: QuickLitUser = getUser();
            const requestInput = {
                author: user.username,
                postID: props.postID,
                comment: commentInput
            };
            authenticatedHttpPost(BACKEND_BASE_URL + '/authenticated/post/comment', requestInput)
                .then(response => {
                    const status: number = response.status as number;
                        if (status === 200) {
                            comments.push({
                                commentAuthor: requestInput.author,
                                commentBody: commentInput
                            })
                            setCommentInput("") 
                        }
                });
        }
    }
    const handleCommentInputChange = (event: any)=>{

        setCommentInput(event.target.value);
    }
     return (
        <div className="post-wrapper">
            <div className="post-container">
                <img className="avatar-pic" src={Avatar3} />
                <div className="body-content">
                    <div className="post-author">
                        {props.author}
                    </div>
                    {props.bookID &&
                        <div className="post-bookID">
                            <img className="book-icon" src={BookIcon} />
                            {props.bookID}
                        </div>
                    }
                    <div className="post-body">
                        {props.attributes.postBody}
                    </div>
                </div>
            </div>
            <div className="post-action-container">
            <div className="number-of-likes">
                    {likes.length}
                </div>
                <button className="publish-like-btn" onClick={publishLike}>
                    {isLikedByUser? "unlike": "like"}
                </button>
                <button className="publish-like-btn">
                    {"report"}
                </button>
                <form className="comment-form" onSubmit={publishComment}>

                    <input 
                        className="comment-form-input"
                        type="text"
                        value={commentInput}
                        onChange={handleCommentInputChange} 
                        />
                    <input className="comment-form-btn" type="submit" value="Comment" />
                </form>
            </div>
            <div className="comments-section">
                Comments:
                <div className="comment-list">
                    {
                        comments.map((element: any) => (
                            <div className="comment-item">
                                <div className="comment-author">
                                    {element.commentAuthor}:
                                </div>
                                <div className="comment-body">
                                    {element.commentBody}
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </div>
     )
}



export default Post;