import React, { Component } from "react";
import {Input, SubmitBtn} from "./Search"
import API from "../../util/API";
import ResultList from "./ResultList"
import Saved from "./Saved";
class Books extends Component {

    state = {
        books: [],
        search: "",
    };
    searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                console.log("This is res.data", res.data.items)
                this.setState({
                books: res.data.items,
                search: ""
            })})
            .catch(err => console.log(err));
            
    };
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };
    saveGoogleBookID = currentBook => {
        console.log("book being saved:", currentBook.title);
        console.log("that book's id:", currentBook.id);
        API.saveBookID(currentBook.id)
        .then(res => console.log("Successful id POST to DB", res))
        .catch(err => console.log("this is the error", err));
    }
    
    render() {
        return (
            <div>
                <form>
                    <h5>Search for books</h5>
                    <Input 
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name="search"
                        placeholder="e.g. Harry Potter"
                    />
                    <SubmitBtn onClick={this.handleFormSubmit}/>
                </form>
                
                {this.state.books.length ? (
                    <ResultList 
                    bookState={this.state.books}
                    saveGoogleBookID={this.saveGoogleBookID}>
                    </ResultList>
                ) : (
                    <div>
                        <hr/>
                    <p style={{fontStyle: "italic"}}>No results to display</p>
                    </div>
                )}
            </div>
        )
    }
}

export default Books
