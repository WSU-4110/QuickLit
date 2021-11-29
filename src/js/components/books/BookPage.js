import { Component, useState, useEffect} from "react";
import { useLocation } from "react-router-dom"
import API from "../../util/API"
require("../../../style/books/BookPage.scss");

export default function BookPage() {
    const location = useLocation()
    const bookId = location.state
    const [book, setBook] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (API.googleBooksIDSearch(bookId)
        .then(res => {
            console.log(res.data.volumeInfo)
            setBook(res.data.volumeInfo)
            setIsLoading(false)
            console.log(book.title)
        })
        .catch(err => console.log("error on bookpage", err)))
    },[]);

    return(
        <div className="profile-container">
        <div className="profile-hero">
             <img src={book.imageLinks.small} alt="book pic"/>
             <div className="details-container">
                <header>
                    <h1>{isLoading? "loading": book.authors}</h1>
                </header>   

                </div>
            </div>
        </div>
    )
}
