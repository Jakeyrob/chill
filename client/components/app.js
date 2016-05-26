import React from 'react';
import ReactDOM from 'react-dom';

var app = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});


module.exports = app;