import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './movie_list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  } 
  render() {
    return (
      <div>
        <MovieList />
      </div>
    );
  }
};


module.exports = App;