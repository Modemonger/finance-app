import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
const EntryList = () => {

  const { transactions }= useContext(UserContext);
  const { deleteTransaction } = useContext(UserContext);
  
  function remove(e, trans){
    e.preventDefault();
    deleteTransaction(trans.id);
  }

  function balance(){
    let sum = 0; 
    transactions.map( transaction => {sum+=Number(transaction.amount)});
    return sum;
  }

  function income(){
    let sum = 0; 
    transactions.map( transaction => {
      if(Number(transaction.amount)>0)
      sum+=Number(transaction.amount)
    });
    return sum;
  }

  function spending(){
    let sum = 0; 
    transactions.map( transaction => {
      if(Number(transaction.amount)<0)
      sum+=Number(transaction.amount)
    });
    return sum;
  }

  return (
      <div className='entryList'>
          <table>
            <thead>
              <tr>
                <th colSpan={2}>Your balance is {balance()}</th>
                <th>Your income is {income()}</th>
                <th>Your spending is {spending()}</th>
              </tr>
              <tr>
                <th>Category</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                transactions.map( transaction => (
                  <tr key={transaction.id}>
                    <th>{transaction.category}</th>
                    <th>{transaction.amount}</th>
                    <th>{transaction.currency}</th>
                    <th><button onClick={(event) => remove(event, transaction)}>Delete</button></th>
                  </tr>
                ))
              }
            </tbody>
          </table>
      </div>
    );
};
export default EntryList;