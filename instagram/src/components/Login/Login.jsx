import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleLogin = (event) => {
    event.preventDefault();
    window.localStorage.setItem('user', this.state.username)
  }

  handleOnChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      // TODO: Turn these into controlled inputs
      <form onSubmit={this.handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleOnChange}
          />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleOnChange}
          />
        <input type="submit" value="Login"/>
      </form>
    );
  }
}
 
export default Login;