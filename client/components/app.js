import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './movie_list';
import SearchBar from './searchbar';
import api from '../utils/api';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchingMovie: true,
      results: [],
    };
  }

  handleSearchInput(event) {
    this.setState({query: event.target.value});
  } 

  // TODO: implement
  handleMovieCheck(event) {

  }

  // TODO: implement
  handleSeriesCheck(event) {
    
  }

  submitSearch(event) {
    event.preventDefault();
    if (this.state.searchingMovie) {
      return api.movieSearch(this.state.query)
        .then( response => {
          this.setState({results: response.Search});
          console.log(this.state);
        }); 
    } else {
      return api.seriesSearch(this.state.query)
        .then( response => {
          this.setState({results: response.Search});
        });
    }
  }

  render() {
    return (
      <div>
      <h1>Chill</h1>
        <SearchBar 
          handleSearchSubmit={this.submitSearch.bind(this)} 
          handleTextChange={this.handleSearchInput.bind(this)}
          handleMovieCheck={this.handleMovieCheck.bind(this)}
          handleSeriesCheck={this.handleSeriesCheck.bind(this)}
          query={this.state.query}
        />
        <MovieList />
      </div>
    );
  }
};

module.exports = App;