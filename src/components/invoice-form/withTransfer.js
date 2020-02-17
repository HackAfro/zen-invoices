import React from 'react';
import TransferList from '../transfers-list';

const WithTransfer = ({ selectTransfer, selectedTransfer }) => {
  return (
    <div>
      <div>
        <label htmlFor='search' className='font-bold text-s'>
          Search IBAN
        </label>
        <input
          type='text'
          className='mt-1 w-full py-2 px-3 border border-gray-400 text-sm text-gray-800 font-bold focus:border-purple-600 rounded'
          id='search'
          placeholder='Enter IBAN to search'
        />
      </div>

      <div className="mt-2">
        <TransferList
          selectedTransfer={selectedTransfer}
          selectTransfer={selectTransfer}
        />
      </div>
    </div>
  );
};

export default WithTransfer;
