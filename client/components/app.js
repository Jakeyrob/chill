import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './movie_list';
import api from './api';

const submitSearch = () => {
  api.movieSearch(this.state.searchInput)
    .then(function(results){
      this.setState(movies: this.state.movies.concat(this.searchResults[0]);); 
    }
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchInput: '',
      searchResults: []
    };
  } 
  render() {
    return (
      <div>
        <SearchBar submitSearch={submitSearch} />
        <MovieList />
      </div>
    );
  }
};

module.exports = App;