import React from 'react';

import EntryList from './EntryList';
import InputForm from './InputForm';
import { CategoryProvider } from '../Context/CategoryContext';


const UserPage = () => {
  return (
        <CategoryProvider>
            <div className='userPage'>
                <div className='userCardContainer'>
                    <InputForm />
                    
                </div>
                <EntryList />
            </div>
        </CategoryProvider>
    );
};

export default UserPage;