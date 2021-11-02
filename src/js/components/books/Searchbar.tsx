import React, { Component } from 'react';

const Searchbar = (props: any) => {
    return(
        <div className="searchbar">
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} placeholder="search" type="text"/>
            <button type="submit">Search</button>
            {/*
                FOR ADDING SEARCH FILTERS
                <select value={props.sort} onChange={props.handleSort} >
                <option value="">Sort</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
            </select> */}
        </form>
        </div>
    )
}

export default Searchbar;