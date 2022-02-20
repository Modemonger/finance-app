import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import { sendPost } from '../apiCalls/ApiCalls';
import { UserContext } from '../Context/UserContext';
import axios from 'axios';

const SignupPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCorrect, setPasswordCorrect] = useState(false);
    const [currency, setCurrency] = useState('euro');
    const { setUser }= useContext(UserContext);

    function SetUser(id){
        setUser(id);
    }

    const submit = e =>{
        e.preventDefault();
        const payload = {
            name,
            email,
            password,
            currency,
            entryList:{}
        }
        if(passwordCorrect){
            axios.post('/api/v1/addUser', payload)
            .then(response => response.data)
            .then(data => SetUser(data))
            .catch(err => console.log(err))
        }
        //.then(window.location = '/userPage')
        else window.alert('given passwords dont match');

    }

  return (
        <div className='signUpContainer'>
            <form className='signUpForm' onSubmit={submit}>
                <label>
                    Enter display name:
                    <input type="text" name="userName" id="userName" required = {true}
                        value={name} onChange={(e)=> setName(e.target.value)}
                    />
                </label>
                <label>
                    Enter your email:
                    <input type="email" name="userEmail" id="userEmail" required = {true}
                        value={email} onChange={(e)=> setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input type="password" name="userPassword" id="userPassword" required = {true}
                        value={password} onChange={(e)=> setPassword(e.target.value)}
                    />
                </label>
                <label>
                    Repeat password:
                    <input type="password" name="repeatPasword" id="repeatPassword" required = {true}
                        onChange={(e)=> {if(e.target.value === password)setPasswordCorrect(true)}}
                    />
                </label>
                <label>
                    Select your currency:
                    <select name="currency" id="currencySelect" required = {true}
                        value={currency} onChange={(e)=> setCurrency(e.target.value)}
                    >
                        <option value="euro">Euro</option>
                    </select>
                </label>
                <button type="submit">Sign up</button>
            </form>
            <Link to='../login'>Already have an account?</Link>
        </div>
    );
};

export default SignupPage;