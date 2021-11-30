import React, { Component } from "react";
import {Input, SubmitBtn} from "./Search"
import API from "../../../util/API";
import ResultList from "./ResultList"
import searchicon from "../../../../assets/icons/searchicon.png"
require("../../../../style/books/BookSearch.scss");

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
    saveGoogleBook = currentBook => {
        console.log("book being saved:", currentBook);
        console.log("that book's id:", currentBook.id);
        API.saveBookID(currentBook.id)
        .then(res => console.log("Successful id POST to DB", res))
        .catch(err => console.log("this is the error", err));
    }
    
    render() {
        return (
            <><div className="search-container">
                <div className="searchbar">
                <form>
                    <input
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name="search"
                        placeholder="Search" 
                        autocomplete="off"/>
                        <button onClick={this.handleFormSubmit}><img src={searchicon}/></button>
                </form>
                </div>
            </div>
            
            
            <div>
                <list>
                    {this.state.books.length ? (
                        <ResultList
                            bookState={this.state.books}
                            saveGoogleBook={this.saveGoogleBook}>
                        </ResultList>
                    ) : (<></>)}
                </list>
            </div>
            </>
        )
    }
}

export default Books
