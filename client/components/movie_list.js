import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './movie_card';

class MovieList extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MovieCard />
      </div>
    );
  }
};

module.exports = MovieList;