const server = 'http://www.omdbapi.com/';
const search = '?s=';
const movie = '&type=movie';
const series = '&type=series';

module.exports = {
  movieSearch: (movieTitle) => {
    return fetch(server + search + movie + movieTitle);
  }
};