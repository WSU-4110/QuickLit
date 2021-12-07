import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from 'react-bootstrap';

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
    }, []);

    return (isLoading ? <div>"loading"</div> :
        !book ? <div>Book not found</div> :
            <div className="bpd_container">
                <div className="item SearchContainer">
                //Search Protocol Here
                </div>
                <div className="body_container">
                    <div className="item main_content">
                        <div className="item primaryinfoContainer">
                            <div className="title_container">
                                <h1>Title: {book.title}</h1>
                            </div>
                            <div className="subtitle_container">
                                <h2> {book.subtitle}</h2>
                            </div>
                            <div className="author_container">
                                <h3> By: {book.authors[0]}</h3>
                            </div>
                            <div className="publishinginfo_container">
                                <h4> Publisher: {book.publisher}</h4>
                            </div>
                            <div className="publishingdate_container">
                                <h4> Publishing date: {book.publishedDate}</h4>
                            </div>
                            <div className="pagecount_container">
                                <h4> Page count: {book.pageCount}</h4>
                            </div>
                            <div className="booklanguage_container">
                                <h4> Language: {book.language}</h4>
                            </div>
                            <div className="bookdescription_container">
                                <p dangerouslySetInnerHTML={{ __html: book.description }} className="description"></p>
                            </div>
                        </div>
                    </div>
                    <div className="item left_sidebar">
                        <div className="item book_ImgContainer">
                            <img src={book.imageLinks.thumbnail} width="350px" height="500px" id="pic" alt="book pic" />
                        </div>
                    </div>
                </div>
                <div className="item bookrecommendations">
                    Book Recommendations
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="bookslider_item"
                                src="holder.js/800x400?text=First slide&bg=373940"
                                alt="First book"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="bookslider_item"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second book"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="bookslider_item"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third book"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="bookslider_item"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Fourth book"
                            />
                            <Carousel.Caption>
                                <h3>Fourth slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="bookslider_item"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Fifth book"
                            />
                            <Carousel.Caption>
                                <h3>Fifth slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>
                <div className="item review_section">
                    Reviews
                    
                </div>
                <footer className="item">
                    Copyright: QuickLit

                </footer>








            </div>
    )
}

function fetchBookData(bookId: any, setBook: (book: Book) => void, setIsLoading: (isLoading: boolean) => void) {
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
