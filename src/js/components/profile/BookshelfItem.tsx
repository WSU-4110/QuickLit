import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import API from '../../util/API';

interface Props {
    id: string;
}
interface book {
    title: string;
    authors: string[];
    imageLink: string;
    isLoading: boolean;
}

export default function BookshelfItem(props: Props){

    const [book, setBook] = useState<book>({
        title: "",
        authors: [],
        imageLink: "",
        isLoading: true
    });
    useEffect( () => {
        console.log(props.id)
        API.googleBooksIDSearch(props.id)
        .then(res => {
            const tempBook = res.data.volumeInfo;
            setBook({
                title: tempBook.title,
                authors: tempBook.authors,
                imageLink: tempBook.imageLinks.thumbnail,
                isLoading:false
            });
        })
        .catch(err => {
            console.log("er", err) 
        })
       }, []);

    return ( book.isLoading? <></> :
        
        <div>
            <img className="bookshelf-image" src={book.imageLink}/>
            <h1 className="bookshelf-title">{book.title}</h1>
            <h1 className="bookshelf-authors">{book.authors}</h1>
        </div>
    );
}





