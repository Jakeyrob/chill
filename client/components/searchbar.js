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
        <button onclick={this.props.submitSearch}> </button>
      </div>
      );
  }
};

module.exports = SearchBar;