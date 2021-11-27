import React, { Component } from 'react'
import API from '../../util/API';
import SavedList from "./SavedList";

class Saved extends Component {

    state = {
        savedBooks: [],
        savedBookIDs:["cT5U7IlC_ugC", "gczsCgAAQBAJ","RoLZdHLNQJEC"]
    }   

    componentDidMount = () => {
        this.getBooks()
        
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            console.log("You deleted this book:", res);
            this.getBooks();
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }
    
    getBookIDs = () => {
        console.log("savedBookIDs:",this.state.savedBookIDs)
        API.getBookshelfIDs()
        .then(res => {
            this.setState({
                savedBookIDs: res
            })
            console.log("This is the res from getBookshelfIDs", res);
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }
    
    getBooks = () => {
        //savedBookIDs has an array of book ids. convert to array of volume info
        this.getBookIDs()
        for (const [i, bookID] of this.state.savedBookIDs.entries()) {
            API.googleBooksIDSearch(this.state.savedBookIDs[i])
            .then(res => {
                this.state.savedBooks.push(res.data.volumeInfo)
                console.log("savedBooks[]: ", this.state.savedBooks)           
            })
            .catch(err => console.log("error:", err));
        }
        
    }


    render() {
        return (
            <div>
                {this.state.savedBooks.length ? (
/*                     <h1>{this.state.savedBooks}</h1>
 */                    <SavedList 
                    bookState={this.state.savedBooks}
                    deleteGoogleBook={this.deleteGoogleBook}
                    >
                    </SavedList>
                ) : (
                    <h5>No results to display</h5>
                )}
            </div>
        )
    }
}

export default Saved
