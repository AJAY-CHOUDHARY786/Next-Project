// LoginForm.jsx
import React from 'react';

const Login = () => {
  return (
    <div>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
       
        <a href="#" className="forgot-password">Forgot Password?</a>

        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};

export default Login;
