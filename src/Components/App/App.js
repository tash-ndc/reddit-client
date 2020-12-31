import React, {useEffect, useState} from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Subreddits from "../Subreddits/Subreddits";
import Card from "../Card/Card";
import TEST from "../TEST";
import axios from 'axios';

const App = () => {
  const [subreddits, getSubreddits] = useState([]);
  const url = "https://www.reddit.com/";

  useEffect(() => {
    getSubredditInfo();
  }, []);

  const getSubredditInfo = () => {
    axios
      .get(`${url}r/popular.json`)
      .then((response) => {
        const subredditList = response.data.data.children.map(el => el.data.subreddit);
        getSubreddits(subredditList);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className="container">
      <Nav />
      <Subreddits subreddits={subreddits} />
      <Card />
      <TEST />
    </div>
  );
};

export default App;
