import axios from "axios";

const api = axios.create({
  // headers: window.headers,
});

export default {
  getRedditArticles: (query) =>
    api.get(`https://www.reddit.com/search.json?q=${query}`)
};
