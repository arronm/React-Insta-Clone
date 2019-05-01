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
    this.props.handleLogin(this.state.username);

    this.setState({
      ...this.state,
      username: '',
      password: '',
    });
  }

  handleOnChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
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