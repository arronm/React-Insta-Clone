import React from 'react';

const Login = (props) => {
  return (
    // TODO: Turn these into controlled inputs
    <form>
      <input type="text" value="username" name="username" />
      <input type="password" value="password" name="password" />
      <input type="button" value="Login"/>
    </form>
  );
}
 
export default Login;