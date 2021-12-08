import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

interface Props {
    key: string;
    id: string;
    title: string;
    link: string;
    authors: string;
    image: string;
    description: string;
    saveGoogleBook: (id: string)=>void;
}

interface State {
    bgColor: string;
    color: string;
    text: string;
}
export default function ResultListItem(props: Props){

    const [state, setState] = useState<State>(
        {
            bgColor: "",
            color: "",
            text: "Add to Bookshelf"
        }
    );
    


    const getStyle = () => {
        if (state.text === "Add to Bookshelf") {
            setState({
                bgColor: "#0074f8",
                color: "white",
                text: "Added"
            })
        }   
    }



    const onClickFunc = () => {
        props.saveGoogleBook(props.id)
        getStyle();
    }
    
    var shortTitle = props.title.substring(0,44)
    shortTitle = shortTitle + "..."

    return (
        <div>
                <div className="card">
                    <div className="card-body">
                        <Link
                            to={{
                                pathname: "/bookpage",
                                state:  props.id
                            }}
                            style={{ 
                                textDecoration: 'none',
                                color: 'black'
                            }}
                        >
                            <img src={props.image} alt="book"/>
                        </Link>
                        <Link
                        to={{
                            pathname: "/bookpage",
                            state:  props.id
                        }}
                        style={{ 
                            textDecoration: 'none',
                            color: 'black'
                        }}
                        >
                            {props.title.length < 44 ? (
                            <h5 className="card-title" style={{margin: "10px 0"}}>{props.title}</h5>
                            ) : (
                                <h5 className="card-title" style={{margin: "10px 0"}}>{shortTitle}</h5>
                            )}
                        </Link>
                        <p style={{fontStyle: "italic"}}>{props.authors}</p>
                        
                        <button onClick={onClickFunc} style={{ backgroundColor: state.bgColor, color: state.color }} className="btn">{state.text}</button>
                    </div>
                </div>
            </div>
    );
}
