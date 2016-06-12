const server = 'http://www.omdbapi.com/';
const search = '?s=';
const movie = '&type=movie';
const series = '&type=series';

module.exports = {
  movieSearch: (title) => {
    console.log('movieSearch is firing!');
    return fetch(server + search + title + movie).then((response) => {return response.json();});
  },
  seriesSearch: (title) => {
    return fetch(server + search + title + series).then((response) => {return response.json();});
  }
};