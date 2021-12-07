import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import API from '../../util/API';

import  bin  from "../../../assets/icons/bin.png"


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
    const [style, setStyle] = useState({
        display: false
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
    
    const onClickDeleteBook = () => {
        API.removeBookFromBookShelf(props.id)
        console.log("removed" )
    }
    const showStyle = () => {
        setStyle({ display: true })
    }
    const callHideStyle = () => {
        hideStyle(setStyle)
    }
    return ( book.isLoading? <></> :
        
        <div>
            <Link
                to={{
                    pathname: "/bookpage",
                    state:  props.id
                }}
            >
            <img className="bookshelf-image" 
                 src={book.imageLink}
                 onMouseEnter={showStyle} 
                 onMouseLeave={callHideStyle}
            />
            </Link>
            <h1 className="bookshelf-title">{book.title}</h1>
            <h1 className="bookshelf-authors">{book.authors}</h1>
                {style.display? ( 
                <button className="del-btn"onClick={onClickDeleteBook}>
                    <img className="bin" src={bin} />
                </button> ) : (<></>)}
            
        </div>
    );
}

async function hideStyle(setStyle: (display: any)=> void) {
    setTimeout(() => {setStyle({
        display:false
    })}, 1500);
    
    }





