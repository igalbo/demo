import React from "react";
import { useDispatch } from "react-redux";
import { getBook } from "./actions";
import { Link } from "react-router-dom";
import "./Book.css";

function Book({ book }) {
  const dispatch = useDispatch();

  return (
    <div className="row__book" onClick={() => dispatch(getBook(book))}>
      <Link to="/book" style={{ textDecoration: "none" }}>
        <img className="row__book__image" src={book.image} alt={book.name} />

        <h2 className="row__book__name">{book.name}</h2>
        <h3 className="row__book__owner">
          Owned by <span className="row__book__owner__name">{book.owner}</span>
        </h3>
      </Link>
    </div>
  );
}

export default Book;
