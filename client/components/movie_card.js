import React from 'react';
import ReactDOM from 'react-dom';
import WebRating from './web_rating';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      rating: 7
    };
  }
  render() {
    return (
      <div>
        <div classname='thumbnail'>
          <img src={this.state.thumbnail} />
        </div>
        <div classname='title'>{this.state.title}</div>
        <div classname='description'>{this.state.description}</div>
        <WebRating classname='webRating' rating={this.state.rating} />
      </div>
    );
  }
};

module.exports = MovieCard;