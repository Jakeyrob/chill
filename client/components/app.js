import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';
import SearchBar from './Searchbar';
import Signup from './Signup';
import Login from './Login';
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

    this.fetchById = this.fetchById.bind(this);
    this.selectTitle = this.selectTitle.bind(this);
  }

  // Sets this.state.selected, based on click of search result
  selectTitle(id) {
    this.setState({ selected: id}, () => this.fetchById())
  }

  // TODO: Change to handle clicking on search result
  // Fire API request with search result's imdbID
  fetchById() {
    return api.idSearch(this.state.selected)
      .then( response => {
        console.log(response);
        this.setState({list: this.state.list.concat(response)});
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
        <Signup />
        <Login />
      </div>
    );
  }
};

module.exports = App;