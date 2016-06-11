import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      searchingMovie: true,
      searchingSeries: false
    };
  }
  render(){
    return (
      <div>
        <form>
          <input type='text' placeholder='Search...' value={this.state.query}></input>
          <input type='checkbox' />
          <p>Movie</p>
          <input type='checkbox' />
          <p>Series</p>
          <button 
            onclick={this.searchingMovie ? 
            this.props.submitSearch(this.state.query, true) : 
            this.props.submitSearch(this.state.query, false)}
          > 
            Submit
          </button>
        </form>
      </div>
      );
  }
};

module.exports = SearchBar;