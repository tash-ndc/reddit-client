import axios from "axios";

const Reddit = {
  async getSubreddits() {
    try {
      const response = await axios.get("https://www.reddit.com/r/popular.json");
      const subreddits = response.data.data.children.map(
        (el) => el.data.subreddit
      );
      return subreddits;
    } catch (err) {
      console.log(err);
    }
  },
};

export default Reddit;
