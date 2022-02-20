import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HeroPage from './HeroPage';
import LoginPage from './LoginPage';
import RemindPassword from './RemindPassword';
import SignupPage from './SignupPage';
import UserPage from './UserPage';

const NavBar = () => {
  return (
        <div className='navBar'>
            <Router>
                <Link to='/'>Home</Link>
                <Link to='/signup'>Signup</Link>
                <Link to='/login'>Login</Link>
                <Routes>
                    <Route path='/' element={<HeroPage />} />
                    <Route path='/signup' element={<SignupPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/login/remindPassword' element={<RemindPassword />} />
                    <Route path='/userPage' element={<UserPage />} />
                </Routes>
            </Router>
            
        </div>
    );
};

export default NavBar;