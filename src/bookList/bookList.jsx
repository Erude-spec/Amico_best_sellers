import React, { useState } from "react";
import { books } from "../data";
import Book from "../book/book";
import "./bookList.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const BookList = () => {
  const [number, setNumber] = useState(0);
  const addNumber = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <div className="headerContainer">
        <h1 className="heading">
          amico best sellers
          <div className="shopping-cart-container">
            <ShoppingCartOutlinedIcon
              className="shopping-cart"
              style={{ fontSize: "2rem" }}
            />
            <span className="cart-number">{number}</span>
          </div>
        </h1>
      </div>
      <section className="booklist" >
        {books.map((book, index) => {
          return (
            <Book
              {...book}
              key={book.id}
              number={index}
              addNumber={addNumber}
            />
          );
        })}
      </section>
    </>
  );
};

export default BookList;
