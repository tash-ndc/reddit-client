import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onClickAgain = this.onClickAgain.bind(this);
    }
    async getSubreddits() {
        try {
            const response = await axios.get('https://www.reddit.com/r/popular.json');
            const subreddits = response.data.data.children.map(el => el.data.subreddit);
            console.log(subreddits);
        } catch (err) {
            console.log(err);
        }
    };

    async getData() {
        try {
            const response = await axios.get('https://www.reddit.com/r/popular.json');
            const data = response.data;
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    onClick(e){
        e.preventDefault();
        this.getSubreddits()
    }

    onClickAgain(e){
        e.preventDefault();
        this.getData()
    }

    render() {
        return(
            <div>
                <button onClick={this.onClick}>subreddit list</button>
                <button onClick={this.onClickAgain}>base list</button>
            </div>
        )
    }



};

export default Test;