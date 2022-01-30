import React from 'react';

import EntryList from './EntryList';
import InputForm from './InputForm';
import LoginPage from './LoginPage';
import NavBar from './NavBar';

const UserPage = () => {
  return (
            <div className='userPage'>
                <div className='userCardContainer'>
                    <InputForm />
                    
                </div>
                <EntryList />
            </div>
    );
};

export default UserPage;