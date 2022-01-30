import React from 'react';

 const InputForm = () => {
    return (
    <form>
        <label>
        What did you spend on :
        <select>
            <option value="food">Food</option>
            <option value="housing">Housing</option>
            <option value="travel">Travel</option>
            <option value="add">Add category</option>
        </select>
        </label>
        <label>
            How much did you spend :
            <input type="number" name="price" id="price" />
        </label>
        <label>
        What currency did you use :
        <select>
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