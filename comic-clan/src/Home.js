import React from "react";
import Row from "./Row";
import Search from "./Search";
import Sorters from "./Sorters";

function Home() {
  return (
    <div className="home">
      <Search />
      <Sorters />
      <Row />
    </div>
  );
}

export default Home;
