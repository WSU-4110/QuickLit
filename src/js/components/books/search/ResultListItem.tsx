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
            text: "Save"
        }
    );
    


    const getStyle = () => {
        if (state.text === "Save") {
            setState({
                bgColor: "#00E000",
                color: "white",
                text: "Saved"
            })
        }
        else {
            setState({
                bgColor: "",
                color: "",
                text: "Save"
            })
        }   
    }



    const onClickFunc = () => {
        props.saveGoogleBook(props.id)
        getStyle();
    }

    return (

        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <img src={props.image} style={{maxWidth: "100px"}} alt="book"/>
                    <h5 className="card-title" style={{margin: "10px 0"}}>{props.title}</h5>
                    <p className="card-text" >{props.description}</p>
                    <p style={{fontStyle: "italic"}}>Author(s): {props.authors}</p>
                    <Link
                        to={{
                            pathname: "/bookpage",
                            state:  props.id
                        }}
                    >
                        <h4>View Book</h4>
                    </Link>
                    <button onClick={onClickFunc} style={{ backgroundColor: state.bgColor, color: state.color }} className="btn">{state.text}</button>
                </div>
            </div>
        </div>
    );
}






