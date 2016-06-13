import React from 'react';
import ReactDOM from 'react-dom';

const WebRating = ({rating}) => {
  let stars = "";
  if (rating > 0) {
    for (var i = 0; i < rating; i++) {
      stars += "*";
    }
  }
  console.log(stars);
  return <div classname='stars'>{stars}</div>;
};

module.exports = WebRating;