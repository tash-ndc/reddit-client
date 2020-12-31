import React from "react";

export default function Subreddits(props) {
  // console.log(props.subreddits);
  // return(<div>{props.subreddits}</div>)

  const displaySubreddits = (props) => {
    const { subreddits } = props;

    if (subreddits.length > 0) {
      return subreddits.map((subreddit, index) => {
        console.log(subreddit);
        return (
          <div className="subreddit" key={index}>
            <h3 className="category">{subreddit}</h3>
          </div>
        );
      });
    } else {
      return <h3>Loading...</h3>;
    }
  };

  return <div>{displaySubreddits(props)}</div>;
}
