import React from 'react';
import ReactDOM from 'react-dom';
import WebRating from './web_rating';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      rating: this.props.rating,
      thumbnail: this.props.thumbnail
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