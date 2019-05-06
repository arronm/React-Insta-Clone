import React, { Component } from 'react';
import './Login.scss';

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
      <div className="LoginWrapper">
        <h2>Login</h2>
        <form onSubmit={this.handleLogin} className="LoginForm">
          <input
            className="LoginForm__username"
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleOnChange}
            />
          <input
            className="LoginForm__password"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleOnChange}
            />
          <input className="LoginForm__submit" type="submit" value="Login"/>
        </form>
      </div>
    );
  }
}
 
export default Login;