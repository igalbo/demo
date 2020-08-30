import React from "react";
import "./App.css";
import instance from "./axios";
import kthulu from "./omertest";

function App() {
  async function fetchData() {
    //const request = await instance.get("https://api.ebay.com/ws/api.dll");
    const request = await kthulu.get("http://localhost:3010");
    return request;
  }

  const result = fetchData();
  console.log(result);
  return (
    <div className="App">
      <h2>Howdy ho!</h2>
      {/* Search */}
      {/* Results */}
    </div>
  );
}

export default App;
