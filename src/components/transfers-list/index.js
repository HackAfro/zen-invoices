import React, { useContext } from 'react';
import { AppContext } from '../../contexts';
import TransferItem from './transfer-item';

const TransferList = ({ selectTransfer, selectedTransfer }) => {
  const { transfers } = useContext(AppContext);

  return (
    <>
      {transfers.map(transfer => (
        <TransferItem
          key={transfer.id}
          transfer={transfer}
          setSelectedItem={selectTransfer}
          selectedItem={selectedTransfer}
        />
      ))}
    </>
  );
};

export default TransferList;
