import { Component } from "react";

require("../../../style/profile/ProfilePage.scss");

class BookPage extends Component {
    state = {
        book: []
    }
    componentDidMount = () => {
        const {book} = this.props
        
    }
    render() {
        console.log("bookpage props", this.props.bookPageState)
        return (
            <div className="profile-container">
              <div className="profile-hero">
                <h1>{book.volumeInfo.title}</h1>
              </div>
            </div>
        )
    }
}