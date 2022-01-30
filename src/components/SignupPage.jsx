import React from 'react';
import {Link} from 'react-router-dom';
const SignupPage = () => {
  return (
        <div className='signUpContainer'>
            <form className='signUpForm'>
                <label>
                    Enter your email:
                    <input type="email" name="userEmail" id="userEmail" />
                </label>
                <label>
                    Password:
                    <input type="password" name="userPassword" id="userPassword" />
                </label>
                <label>
                    Repeat password:
                    <input type="password" name="repeatPasword" id="repeatPassword" />
                </label>
                <label>
                    Select your country:
                    <select name="country" id="countrySelect">
                        <option value="ass">ass</option>
                    </select>
                </label>
                <button type="submit">Sign up</button>
            </form>
            <Link to='../login'>Already have an account?</Link>
        </div>
    );
};

export default SignupPage;