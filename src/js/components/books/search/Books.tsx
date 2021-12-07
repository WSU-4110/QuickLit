import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { authenticatedHttpGet } from "../../../api/Client";
import API from "../../../util/API";
import { BACKEND_BASE_URL } from "../../../util/Constants";
import searchicon from "../../../../assets/icons/searchicon.png"
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
export default function Books () {

    const [books, setBooks] = useState<BookStructure[]>([])
    const [users, setUsers] = useState<string[]>([])
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

    const searchPeople= () => {

        const userList: string[] = [];
        if(searchTerm.trim()){
            authenticatedHttpGet(BACKEND_BASE_URL + '/authenticated/userdata/search/'+searchTerm.trim()).then(responseJson => {
                responseJson.forEach((user: any) =>{
                    userList.push(user.Username);
                })

                if(userList.length >0){
                    setUsers(userList)
                }


            });          
        }
        
    };

    const handleInputChange = (event: any) => {
        setSearchTerm(event.target.value)
    };
    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        setBooks([]);
        setUsers([]);
        searchBooks();
        /* searchPeople(); */
    };
    const saveGoogleBook = (bookID: string) => {
        API.saveBookID(bookID)
        .then(res => console.log("Successful id POST to DB", res))
        .catch(err => console.log("this is the error", err));
    }
    
    return (
        <><div className="search-container">
            <div className="searchbar">
            <form>
                <input
                    value={searchTerm}
                    onChange={handleInputChange}
                    name="search"
                    placeholder="Search"
                    autoComplete="off"
                    />
                <button onClick={handleFormSubmit}><img src={searchicon}></img></button>
            </form>
            </div>
        </div>

        <div className="book-results-container">
            <div className="book-results">
                {books? (
                        books.map((book) => {
                            if(book.volumeInfo.authors){
                                return (
                                <ResultListItem 
                                key={book.id}
                                id={book.id}
                                title={book.volumeInfo.title}
                                link={book.volumeInfo.previewLink}
                                authors={book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors[0]}
                                image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"}
                                description={book.volumeInfo.description}
                                saveGoogleBook={saveGoogleBook}
                                />)
                            }
                            return <></>;

                        })
                    ) : ( <></> )}
            </div>
        </div></>
    )
}


/*
<ul className="user-search-result-list">
                    {
                        users.map((user) =>{
                            return (
                                <Link
                                    to={{
                                        pathname: "/user",
                                        state:  user
                                    }}
                                >
                                    <li className="user-search-result-item">{user}</li>
                                </Link>

                            );
                        })
                    }
                </ul>
*/