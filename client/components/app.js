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
      searchResults: []
    };
  }

  handleSearchInput(event) {
    this.setState({query: event.target.value});
  } 

  handleMovieCheck() {

  }

  handleSeriesCheck() {
    
  }

  submitSearch() {
    if (this.state.searchingMovie) {
      api.movieSearch(this.state.query)
        .then( (results) => {
          this.setState({results: results});
        }); 
    } else {
      api.seriesSearch(this.state.query)
        .then( (results) => {
          this.setState({results: results});
        });
    }
    console.log("submitSearch is firing!")
  }

  // updateSearch(results) {
  //   this.setState({results: results});
  // }

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
        {console.log(this.state)}
        {console.log("app re-rendering")}
      </div>
    );
  }
};

module.exports = App;