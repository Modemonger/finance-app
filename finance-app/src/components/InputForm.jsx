import React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { CategoryContext } from '../Context/CategoryContext';

 const InputForm = () => {
    const { addTransaction } = useContext(UserContext);
    const { categories } = useContext(CategoryContext);
    const { addCategory } = useContext(CategoryContext);
    
    const [category, setCategory] = useState(categories[0].category);
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState('euro');
    const [categoryInput, setCategoryInput] = useState(false);
    const [newCategory, setNewCategory] = useState('');

    

    const onSubmit = e =>{
        e.preventDefault();

        addTransaction({
            id: Math.floor(Math.random() * 1000000),
            category,
            amount,
            currency
        });
        setAmount(0);
    }

    const inputCat = e => {
        e.preventDefault();

        setCategoryInput(!categoryInput)
    }

    const newCat = e => {
        e.preventDefault();

        addCategory({
            category: newCategory,
            icon: '',
            amount: 0
        });

        setNewCategory('');
        setCategory(categories[0].category);
        inputCat(e);
    }

    if(!categoryInput)
    return (
    <form className='inputForm' onSubmit={onSubmit}>
        <label>
        What did you spend on : 
        <select className='categories' value={category} onChange={(e)=> setCategory(e.target.value)}>
            {
                categories.map( category => (
                    <option key={category.category} value={category.category}>{category.category}</option>
                ))
            }
        </select>
        </label>
        <label>
            How much did you spend :
            <input className='amount' value={amount} onChange={(e)=> setAmount(e.target.value)} type="number" name="price" id="price" />
        </label>
        <label>
        What currency did you use :(doesnt work yet shh)
        <select className='currencies' value={currency} onChange={(e)=> setCurrency(e.target.value)} >
            <option value="euro">Euro</option>
            <option value="dollar">US dollar</option>
            <option value="pounds">Pounds</option>
        </select>
        </label>
        <div className='btnContainer'>
            <input className='submit' type="submit" value="Submit" />
            <button className='submit' onClick={inputCat}>Add category</button>
        </div>
        
    </form>
    );
    else 
    return(
        <form className='categoryForm' onSubmit={ newCat }>
            <label>
                Enter a new category :
                <input className='categoryInput' type="text" placeholder='Enter category name' required={true} value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
            </label>
            <input className='add' type="submit" value="Add category"/>
            <input className='add' type="button" value="Go back" onClick={inputCat} />
        </form>
    );
}

export default InputForm;