import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: []
    };
  }

  render(){
    return (
      <div>
        <form>
          <input 
            type='text' 
            placeholder='Search...' 
            value={this.props.query}
            onChange={this.props.handleTextChange}
          >
          </input>
          <input type='checkbox' onChange={this.props.handleMovieCheck} />
          <p>Movie</p>
          <input type='checkbox' onChange={this.props.handleSeriesCheck}/>
          <p>TV Series</p>
          <button
            type='submit' 
            onClick={this.props.handleSearchSubmit} 
          > 
            Submit
          </button>
        </form>
      </div>
      );
  }
};

module.exports = SearchBar;