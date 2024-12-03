import React from "react";

const BookList = ({ books }) => (
  <div className="book-list">
    {books.map((book, index) => (
      <div key={index} className="book-item">
        <h3>{book.volumeInfo.title}</h3>
        <p>{book.volumeInfo.authors?.join(", ")}</p>
      </div>
    ))}
  </div>
);

export default BookList;
