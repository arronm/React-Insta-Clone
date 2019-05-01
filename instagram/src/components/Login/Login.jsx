import React from 'react';

const Login = (props) => {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log('You did it');
  }
  return (
    // TODO: Turn these into controlled inputs
    <form onSubmit={handleLogin}>
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <input type="submit" value="Login"/>
    </form>
  );
}
 
export default Login;