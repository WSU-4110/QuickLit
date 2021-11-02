import React, { Component } from 'react';
import BookList from './BookList';
import Searchbar from './Searchbar';
import request from 'superagent';

require('../../../style/books/Books.scss');

class Books extends Component <any, any> {

    constructor(props: any){
        super(props)
        this.state = {
            books: [],
            searchField: '',
            sort: ''
        }
    }
    componentDidMount() {
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
                this.setState({ books: [...data.body.items] })
            })
            .catch(error => error.response.body)

    }

    handleSubmit = (e:any) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
                console.log(data);
                this.setState({ books: [...data.body.items] })
            })
            .catch(error => error.response.body)
    
    }

    handleChange = (e:any) => {
        this.setState({ searchField: e.target.value })
    }

    handleSort = (e:any) => {
        this.setState({ sort: e.target.value});
    }
    

    render() {
        const filteredBooks = this.state.books.sort((a: { volumeInfo: { publishedDate: string; }; }, b: { volumeInfo: { publishedDate: string; }; }) => {
            /*FOR ADDING SEARCH FILTERS*/
            /* if(this.state.sort == 'Newest'){
                console.log("in newest")
                return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4));
            }
            else if(this.state.sort == 'Oldest'){
                return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4));
            } */
          
          return;
        })

        return (
          <div className="search-container" >
            <h1>Search Books Here!</h1>
            <Searchbar 
                data={this.state} 
                handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange} 
                handleSort={this.handleSort}
            />
            <div className="search-results">
                <BookList books={filteredBooks}/>
            </div>
          </div>
        );
    }
}

export default Books;
