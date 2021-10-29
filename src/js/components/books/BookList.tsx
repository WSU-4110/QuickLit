import React, { Component } from 'react';
import BookCard from './BookCard';


const BookList = (props: any) => {
    return (
      <div className="list">
        {
          props.books.map((book: { id: any; }) => {
            return <BookCard key={book.id} info={book} />
          })
        }
      </div>
      
    );
}

export default BookList;
