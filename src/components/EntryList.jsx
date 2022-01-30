import React from 'react';

const EntryList = () => {
  return (
      <div className='entryList'>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Money spent</th>
                <th>Currency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Food</th>
                <th>20</th>
                <th>Euro</th>
              </tr>
            </tbody>
          </table>
      </div>
    );
};
export default EntryList;