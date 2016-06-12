const server = 'http://www.omdbapi.com/';
const search = '?s=';
const movie = '&type=movie';
const series = '&type=series';
const id = '?i=';

module.exports = {
  movieSearch(title) {
    return fetch(server + search + title + movie)
      .then(response => response.ok ? response.json() : console.log("Invalid server response"))
      .catch(error => console.error("Failed to fetch movie: " + error.message));
    },

  seriesSearch(title) {
    return fetch(server + search + title + series)
      .then(response => response.ok ? response.json() : console.log("Invalid server response"))
      .catch(error => console.error("Failed to fetch series: " + error.message));
    },

  idSearch(code) {
    return fetch(server + id + code)
      .then(response => response.ok ? response.json() : console.log("Invalid server response"))
      .catch(error => console.error("Failed to fetch id: " + error.message));
  }
};