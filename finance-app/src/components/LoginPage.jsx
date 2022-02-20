import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const LoginPage = () => {

  const { user } = useContext(UserContext);

  console.log(user);

  const validateForm = () => {

  }

  const handleSubmit = e => {
    e.preventDefault();
  }


  return (
      <div className='logInContainer'>
        <form className='loginForm' onSubmit={handleSubmit}>
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
        <Link to='remindPassword'>Forgot password?</Link>
        <br />
        <Link to='../signup'>Dont have an account?</Link>
      </div>
  );
};

export default LoginPage;