import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';



const Statistics = () => {

    const { transactions } = useContext(UserContext);

    let output = [];

    function categoryIncome(){
        
        let sumAmount = transactions.reduce((category, amount) => {
            category[amount.category] = (Number(category[amount.category]) || 0) + Number(amount.amount);
            return category;
        }, {});

        //console.log(sumAmount);
        
        if(sumAmount)
            for (const category in sumAmount) {
                if (Object.hasOwnProperty.call(sumAmount, category)) {
                    const element = sumAmount[category];
                    output.push(
                        <div className='statCategory'>
                            <p>{category} balance</p>
                            <p>{element}</p>
                        </div>
                    );
                }
            }

    }
    categoryIncome();
    return (
        <div className='statistics'>
            {
            output
            }
        </div>
    );
};
export default Statistics;