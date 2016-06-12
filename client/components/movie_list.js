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
        <MovieCard 
          title={this.props.title} 
          description={this.props.description} 
          rating={this.props.rating} 
          thumbnail={this.props.thumbnail}/>
      </div>
    );
  }
};

module.exports = MovieList;