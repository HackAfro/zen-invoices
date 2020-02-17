import React, { useContext } from 'react';
import { AppContext } from '../../contexts';
import TableItem from './tableItem';

const Table = () => {
  const {
    invoices,
    removeInvoice,
    toggleModalState,
    setIsEditing,
    setCurrentInvoice
  } = useContext(AppContext);

  const onUpdateClick = invoice => {
    setCurrentInvoice(invoice);
    setIsEditing(true);
    toggleModalState();
  };

  return (
    <table className='w-full'>
      <thead>
        <tr>
          <th className='text-left text-gray-500 text-xs font-bold uppercase px-4'>
            Date
          </th>
          <th className='text-left text-gray-500 text-xs font-bold uppercase px-4'>
            Subject
          </th>
          <th className='text-left text-gray-500 text-xs font-bold uppercase px-4'>
            Amount
          </th>
          <th className='text-left text-gray-500 text-xs font-bold uppercase px-4'>
            IBAN
          </th>
          <th className='text-left text-gray-500 text-xs font-bold uppercase px-4'>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {invoices.map(invoice => (
          <TableItem
            key={invoice.id}
            invoice={invoice}
            onEditClick={onUpdateClick}
            removeInvoice={removeInvoice}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
