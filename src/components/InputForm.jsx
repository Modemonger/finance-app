import React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';

 const InputForm = () => {

    const [category, setCategory] = useState('food');
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState('euro');

    const { addTransaction } = useContext(UserContext);
    const { transactions } = useContext(UserContext);

    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            category,
            amount,
            currency
        }

        addTransaction(newTransaction);
        setAmount(0);
    }



    return (
    <form onSubmit={onSubmit}>
        <label>
        What did you spend on :
        <select value={category} onChange={(e)=> setCategory(e.target.value)}>
            <option value="food">Food</option>
            <option value="housing">Housing</option>
            <option value="travel">Travel</option>
            <option value="add">Add category</option>
        </select>
        </label>
        <label>
            How much did you spend :
            <input value={amount} onChange={(e)=> setAmount(e.target.value)} type="number" name="price" id="price" />
        </label>
        <label>
        What currency did you use :
        <select value={currency} onChange={(e)=> setCurrency(e.target.value)} >
            <option value="euro">Euro</option>
            <option value="dollar">US dollar</option>
            <option value="pounds">Pounds</option>
        </select>
        </label>
        <input type="submit" value="Submit" />
    </form>
    );
}

export default InputForm;