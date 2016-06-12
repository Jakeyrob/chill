import React from 'react';
import ReactDOM from 'react-dom';
import WebRating from './web_rating';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <div classname='thumbnail'>
          <img src={this.props.thumbnail} />
        </div>
        <div classname='title'>{this.props.title} ({this.props.year})</div>
        <div classname='genre'>{this.props.genre}</div>
        <div classname='runtime'>{this.props.runtime}</div>
        <div classname='description'>{this.props.description}</div>
        <WebRating classname='webRating' rating={this.props.rating} />
      </div>
    );
  }
};

module.exports = MovieCard;