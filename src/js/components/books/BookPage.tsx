import { useState, useEffect} from "react";
import { useLocation } from "react-router-dom"
import API from "../../util/API"

interface Book {
    title: string;
    subtitle: string;
    publisher: string;
    publishedDate: string;
    description: string;
    authors: string[];
    imageLinks: {
        extraLarge: string;
        large: string;
        medium: string;
        small: string;
        smallThumbnail: string;
        thumbnail: string;
    };
    language: string;
    pageCount: number;
}

export default function BookPage() {
    const bookId = useLocation().state;
    const [book, setBook] = useState<Book>();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchBookData(bookId, setBook, setIsLoading);
    },[]);

    return( isLoading? <div>"loading"</div>:
            !book? <div>Book not found</div>:
        <div className="profile-container">
            <div className="profile-hero">
                <img src={book.imageLinks.thumbnail} alt="book pic"/>
                <div className="details-container">
                    <h1> {book.title}</h1>  
                    <h2> {book.subtitle}</h2>  

                    <h3> By: {book.authors[0]}</h3>  
                    <h4> Publisher: {book.publisher}</h4>  
                    <h4> Publishing date: {book.publishedDate}</h4>  
                    <h4> Page count: {book.pageCount}</h4>  
                    <h4> language: {book.language}</h4>  

                    <p dangerouslySetInnerHTML={{__html: book.description}} ></p>  


                </div>
            </div>
        </div>
    )
}

function fetchBookData(bookId: any, setBook: (book: Book)=>void, setIsLoading: (isLoading: boolean)=>void){
    API.googleBooksIDSearch(bookId)
        .then(res => {
            const book = res.data.volumeInfo;
            console.log(book)
            setBook({
                title: book.title,
                subtitle: book.subtitle,
                publisher: book.publisher,
                publishedDate: book.publishedDate,
                description: book.description,
                authors: book.authors,
                imageLinks: book.imageLinks,
                language: book.language,
                pageCount: book.pageCount,
            });
            setIsLoading(false)
        })
        .catch(err => console.log("error on bookpage", err))
}
