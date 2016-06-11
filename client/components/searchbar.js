import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
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
            onClick={this.props.submitSearch} 
          > 
            Submit
          </button>
        </form>
      </div>
      );
  }
};

module.exports = SearchBar;