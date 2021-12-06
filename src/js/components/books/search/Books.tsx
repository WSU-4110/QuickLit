import { useEffect, useState } from "react";
import API from "../../../util/API";
import ResultListItem from "./ResultListItem";

require("../../../../style/books/BookSearch.scss");
interface BookStructure {
    id: string;
    volumeInfo: {
        title: string;
        previewLink: string;
        authors: string [];
        imageLinks : {
            thumbnail: string;
        };
        description: string;
    }
}
// import Saved from "../bookshelf/Saved";
export default function Books () {

    const [books, setBooks] = useState<BookStructure[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("")

    const searchBooks = () => {
        if(searchTerm.trim()){
            API.googleBooks(searchTerm)
                .then(res => {
                    console.log("This is res.data", res.data.items)
                    setSearchTerm("");
                    setBooks(res.data.items)
    
                })
                .catch(err => console.log(err));
        }
    };
    const handleInputChange = (event: any) => {
        setSearchTerm(event.target.value)
    };
    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        searchBooks();
    };
    const saveGoogleBook = (bookID: string) => {
        API.saveBookID(bookID)
        .then(res => console.log("Successful id POST to DB", res))
        .catch(err => console.log("this is the error", err));
    }
    
    return (
        <div>
            <form>
                <h5>Search for books</h5>
                <div className="form-group">
                    <input
                        className="form-control" 
                        value={searchTerm}
                        onChange={handleInputChange}
                        name="search"
                        placeholder="e.g. Harry Potter"
                        />
                </div>
                <button 
                    onClick={handleFormSubmit}
                    className="btn submitBtn" 
                    style={{backgroundColor: "#2196f3", color: "white", marginBottom: "10px"}}
                >
                    Search
                </button>
            </form>
            <div className="search-results-container">
                {books? (
                    books.map((book) => (
                        <ResultListItem 
                        key={book.id}
                        id={book.id}
                        title={book.volumeInfo.title}
                        link={book.volumeInfo.previewLink}
                        authors={book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors[0]}
                        image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"}
                        description={book.volumeInfo.description}
                        saveGoogleBook={saveGoogleBook}
                        />
                    ))
                ) : (
                    <div>
                        <hr/>
                    <p>No results to display</p>
                    </div>
                )}
            </div>
        </div>
    )
}
