import React from "react";
import "./Sorters.css";
import { useDispatch } from "react-redux";
import { sort } from "./actions";

function Sorters() {
  const dispatch = useDispatch();

  return (
    <div className="sorters">
      <button onClick={() => dispatch(sort("YEAR"))}>Year</button>
      <button onClick={() => dispatch(sort("WRITER"))}>Writer</button>
      <button onClick={() => dispatch(sort("ARTIST"))}>Artist</button>
      <button onClick={() => dispatch(sort("OWNER"))}>Owner</button>
      <button onClick={() => dispatch(sort("RANDOM"))}>Random</button>
    </div>
  );
}

export default Sorters;
