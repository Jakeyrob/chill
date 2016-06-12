import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './movie_card';

// TODO: Make stateless?
class MovieList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        {this.props.results.map((result) => (
          <MovieCard
            title={result.Title} 
            year={result.Year}
            genre={result.Genre}
            runtime={result.Runtime}
            description={result.Plot} 
            rating={result.imdbRating} 
            thumbnail={result.Poster} 
            key={result.imdbID}
          /> 
        ))}
      </div>
    );
  }
};

module.exports = MovieList;