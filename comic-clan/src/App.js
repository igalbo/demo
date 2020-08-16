import React from "react";
import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import BookInfo from "./BookInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/book" component={BookInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
