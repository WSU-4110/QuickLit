import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ResultListItem extends Component {

    state = {
        mounted: false,
        bgColor: "",
        color: "",
        text: "Add to bookshelf"
    }
    
    componentDidMount = () => {
        this.setState({
            mounted: true
        })
        console.log("Mounted!")
    }

    getStyle = () => {
        if (this.state.text === "Add to bookshelf") {
            this.setState({
                bgColor: "#00E000",
                color: "white",
                text: "Added"
            })
        }
        else {
            this.setState({
                bgColor: "",
                color: "",
                text: "Add to bookshelf"
            })
        }   
    }



    onClickFunc = () => {
        this.props.saveGoogleBook(this.props)//.bind(this, this.props);
        this.getStyle();
    }

    
    render () {
        
        const {book} = this.props
        var shortenedTitle = this.props.title.substring(0,50)
        shortenedTitle = shortenedTitle + "..."
        
        return (

            <div>
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <Link
                            to={{
                                pathname: "/bookpage",
                                state:  this.props.id
                            }}
                            style={{ 
                                textDecoration: 'none',
                                color: 'black'
                            }}
                        >
                            <img src={this.props.image} alt="book"/>
                        </Link>
                        <Link
                        to={{
                            pathname: "/bookpage",
                            state:  this.props.id
                        }}
                        style={{ 
                            textDecoration: 'none',
                            color: 'black'
                        }}
                        >
                            {this.props.title.length < 30 ? (
                            <h5 className="card-title" style={{margin: "10px 0"}}>{this.props.title}</h5>
                            ) : (
                                <h5 className="card-title" style={{margin: "10px 0"}}>{shortenedTitle}</h5>
                            )}
                        </Link>
                        <p style={{fontStyle: "italic"}}>{this.props.authors}</p>
                        
                        <button onClick={this.onClickFunc} style={{ backgroundColor: this.state.bgColor, color: this.state.color }} className="btn">{this.state.text}</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ResultListItem;





