import React from "react";
import "./Search.css";
import { useDispatch } from "react-redux";
import { search } from "./actions";

function Search() {
  const dispatch = useDispatch();

  return (
    <div className="search">
      <input
        className="search__bar"
        type="text"
        placeholder="Search by book name"
        onChange={(e) => dispatch(search(e.target.value))}
      />
    </div>
  );
}

export default Search;
