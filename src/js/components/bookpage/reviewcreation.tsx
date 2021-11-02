import React from 'react'

export class Review_creation extends React.Component {
    render(){
        return(
            <div className = 'review_section'>
                <h2>Post your Review</h2>
                <form action = "">
                <textarea id = 'review_area' name = 'post' rows = {10} cols = {70} placeholder = 'Write a review....' maxLength = {750}></textarea>
                <br/>
                <button id = "upload_review" form = 'review' type = 'submit'>Reply</button>
                <button id = "cancel_review" form = 'post' type = 'submit'>Cancel</button>
                </form>
            </div>
        )
    }
}



