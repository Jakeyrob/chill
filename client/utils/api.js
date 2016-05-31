const server = 'http://www.omdbapi.com/';
const search = '?s=';
const movie = '&type=movie';
const series = '&type=series';

module.exports = {
  movieSearch: (title) => {
    return fetch(server + search + title + movie);
  },
  seriesSearch: (title) => {
    return fetch(server + search + title + series);
  }
};