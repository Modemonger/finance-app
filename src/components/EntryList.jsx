import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { CategoryContext } from '../Context/CategoryContext';

const EntryList = () => {

  const { transactions }= useContext(UserContext);
  const { deleteTransaction } = useContext(UserContext);
  const { categories } = useContext(CategoryContext);
  
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

  const icon = (cat) => {
    let icon;
    categories.forEach(category => {
      if(category.category === cat) icon = category.icon;
    });
    return icon;
  }


  if(transactions.length>0)
  return (
      <div className='entryList'>
          <table className='list'>
            <thead className='listHead'>
              <tr className='statistics'>
                <th className='balance' colSpan={2}>Your balance is {balance()}</th>
                <th className='income'>Your income is {income()}</th>
                <th className='spending'>Your spending is {spending()}</th>
              </tr>
              <tr className='listInfo'>
                <th>Category</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className='listBody'>
              {
                transactions.map( transaction => (
                  <tr key={transaction.id}>
                    <th>{icon(transaction.category)}{transaction.category}</th>
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

    else return(
      <div className='emptyList'>You have no transaction history</div>
    )
};
export default EntryList;