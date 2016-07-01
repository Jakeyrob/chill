import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  //TODO: Write onChange handlers for inputs and button
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          Username: <br>
          <input type="text" placeholder="username" value={this.state.username}></input>
          Password: <br>
          <input type="password" placeholder="password" value={this.state.password}></input>
        </form>
      </div>
    );
  }
}