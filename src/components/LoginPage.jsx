import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const LoginPage = () => {
  return (
      <div className='logInContainer'>
        <form className='loginForm'>
          <label>
            Email:
            <input type="email" name="userEmail" id="userEmail" />
          </label>
          <label>
            Password:
             <input type="password" name="userPassword" id="userPassword" />
          </label>
            <button type="submit">Sign in</button>
        </form>
        <Link to='remindPassword'>Forgot password</Link>
      </div>
  );
};

export default LoginPage;