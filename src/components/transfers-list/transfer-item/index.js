import React from 'react';

const TransferItem = ({ transfer, selectedItem, setSelectedItem }) => {
  const selected = selectedItem?.id === transfer?.id
  return (
    <div
      className={`${selected && 'border border-purple-500 shadow-2xl'} flex justify-between py-2 px-3 mb-1 shadow`}
      role='button'
      onClick={e => setSelectedItem(transfer)}
    >
      <div>{transfer.subject}</div>

      <div>{transfer.amount}</div>

      <div>{transfer.iban}</div>
    </div>
  );
};

export default TransferItem;
