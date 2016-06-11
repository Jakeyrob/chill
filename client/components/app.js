import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './movie_list';
import SearchBar from './searchbar';
import api from '../utils/api';

const submitSearch = (query, isMovie) => {
  if (isMovie) {
    api.movieSearch(query)
      .then(function(results){
        this.setState({results: this.state.movies.concat(this.searchResults[0])}); 
      }); 
  } else {
    api.seriesSearch(query)
      .then(function(results){
        this.setState({results: this.state.movies.concat(this.searchResults[0])});
      });
  }
};

const handleSearchInput = (event) => {
  this.setState({query: event.target.value});
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchResults: []
    };
  } 
  render() {
    return (
      <div>
        <SearchBar submitSearch={submitSearch.bind(this)} />
        <MovieList />
      </div>
    );
  }
};

module.exports = App;