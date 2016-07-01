const server = 'http://www.omdbapi.com/';
const search = '?s=';
const id = '?i=';

module.exports = {
  movieSearch(title) {
    return fetch(server + search + title)
      .then(response => response.ok ? response.json() : console.log("Invalid server response"))
      .catch(error => console.error("Failed to fetch movie: " + error.message));
    },

  idSearch(code) {
    return fetch(server + id + code)
      .then(response => response.ok ? response.json() : console.log("Invalid server response"))
      .catch(error => console.error("Failed to fetch id: " + error.message));
  }

  // TODO: write controllers for Login and Signup
};