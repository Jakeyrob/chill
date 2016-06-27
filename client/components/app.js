import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';
import SearchBar from './Searchbar';
import api from '../utils/api';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Passed up from SearchBar
      selected: '',
      // Passed down to MovieList
      list: []
    };

    this.fetchTitle = this.fetchTitle.bind(this);
    this.selectTitle = this.selectTitle.bind(this);
  }

  // Sets this.state.selected, based on click of search result
  selectTitle(id) {
    this.setState({ selected: id}, () => this.fetchTitle())
  }

  // TODO: Change to handle clicking on search result
  // Fire API request with search result's imdbID
  fetchTitle() {
    return api.idSearch(this.state.selected)
      .then( response => {
        console.log(response);
        this.setState({results: response});
        console.log('state: ', this.state);
      });
  }


  render() {
    return (
      <div>
      <h1>Chill</h1>
        <SearchBar 
          selectTitle={this.selectTitle}
        />
        <MovieList titles={this.state.list} />
      </div>
    );
  }
};

module.exports = App;