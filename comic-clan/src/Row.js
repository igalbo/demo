import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "./axios";
import requests from "./requests";
import "./Row.css";
import Book from "./Book";

function Row() {
  const searchTerm = useSelector((state) => state.search);
  const sortBy = useSelector((state) => state.sort);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `${requests.fetchBooks}${searchTerm ? `?q=${searchTerm}` : ""}`
      );
      setBooks(request.data);
      return request;
    }
    fetchData();
  }, [searchTerm, sortBy]);
  /*
  useEffect(() => {
    books.sort((a, b) => {
      switch (sortBy) {
        case "year":
          return a.year - b.year;
        case "writer":
          return a.writer - b.writer;
        case "artist":
          return a.artist - b.artist;
        case "owner":
          return a.owner - b.owner;
        case "random":
          return "random";
        default:
          return a.year - b.year;
      }
    });
  }, [books, sortBy]);
*/
  console.table(books);

  return (
    <div className="row">
      {books.map((book) => (
        <Book book={book} />
      ))}
    </div>
  );
}

export default Row;
