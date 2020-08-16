import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./BookInfo.css";

function BookInfo() {
  const myBook = useSelector((state) => state.book);
  const [book, setBook] = useState([]);
  const navStyle = {
    color: "#777777",
  };

  useEffect(() => {
    setBook(myBook);
  }, [myBook]);

  console.log(myBook);

  return (
    <div>
      <div>
        {
          <Link to="/" style={navStyle}>
            Back to collection
          </Link>
        }
      </div>
      <div>
        {<img src={book.image} alt={book.name} />}
        {`${book.name} (${book.year})`}
        {/* book rating */}
        {book.writer}
        {book.artist}
        {book.publication}
        {book.owner}
        {book.summary}
      </div>
    </div>
  );
}

export default BookInfo;
