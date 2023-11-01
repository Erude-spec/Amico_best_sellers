import React from "react";
import "./book.css"


const Book = ({ image, title, author, price , number, addNumber} ) => {
  const handleButtonClick =()=>{
    addNumber()
  }
  return (
    <article className="book">
      <img src={image} alt={title} />
      <div className="title" >{title}</div>
      <div className="author">{author}</div>
      <div className="price">{price}</div>
      <div className="number">#{number + 1}</div>
      <button className="btn" onClick={handleButtonClick}>buy</button>
    </article>
  );
};

export default Book;