import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Subreddits from "../Subreddits/Subreddits";
import Card from "../Card/Card";
import TEST from "../TEST";

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Subreddits />
      <Card />
      <TEST />
    </div>
  );
};

export default App;
