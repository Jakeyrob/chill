import React from 'react';
import ReactDOM from 'react-dom';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      forgotPassword: ''
    };
  }

  //TODO: write onChange handlers for each input field & button

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          Username: <br>
          <input type="text" placeholder="username" value={this.state.username}></input>
          Password: <br>
          <input type="password" placeholder="password" value={this.state.password}></input>
          Confirm Password: <br>
          <input type="password" placeholder="confirmPassword" value={this.state.confirmPassword}></input>
          Email: <br>
          <input type="email" placeholder="email" value={this.state.email}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

