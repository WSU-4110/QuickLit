import { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import API from "../../util/API";

require("../../../style/books/BookPage.scss");
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
                <div className="img-and-titl">
                    <img className="cover" src={book.imageLinks.thumbnail} alt="book pic"/>
                    <div className="title-sub">
                        <div className="title"> {book.title}</div>  
                        <div className="subtitle"> {book.subtitle}</div>  
                    </div>
                </div>
                <div className="details-container">

                        <div className="author">
                            By: {book.authors[0]}
                        </div>
                        <div className="publisher">
                            Publisher: {book.publisher}
                        </div>
                        <div className="publishing-date">
                            Publishing date: {book.publishedDate}
                        </div>
                        <div className="page-count">
                            Page count: {book.pageCount}
                        </div>
                        <div className="language">
                            language: {book.language}
                    </div>   
                </div>
                <p dangerouslySetInnerHTML={{__html: book.description}} className="discription"></p>  
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
