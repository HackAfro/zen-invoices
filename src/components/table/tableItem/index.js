import React from 'react';
import { Edit2 as EditIcon, Trash as DeleteIcon } from 'react-feather';

const TableItem = ({ invoice, onEditClick, removeInvoice }) => {
  const onDeleteClick = invoiceId => {
    if (window.confirm('Are you sure you want to delete this invoice?')) {
      removeInvoice(invoiceId);
    }
  };

  return (
    <tr className='shadow text-base text-gray-800 border-gray-300 hover:shadow-xl hover:border-purple-300 hover:border hover:rounded'>
      <td className='px-2 py-2 md:px-4 md:py-6 border-b'>{invoice.date}</td>
      <td className='px-2 py-2 md:px-4 md:py-6 border-b'>{invoice.subject}</td>
      <td className='px-2 py-2 md:px-4 md:py-6 border-b'>{invoice.amount}</td>
      <td className='px-2 py-2 md:px-4 md:py-6 border-b'>{invoice.iban || 'N/A'}</td>
      <td className='px-2 py-2 md:px-4 md:py-6 border-b'>
        <ul className='flex'>
          <li className='mr-4'>
            <button title="Edit invoice" onClick={e => onEditClick(invoice)}>
              <EditIcon size={20} className='text-gray-500' />
            </button>
          </li>
          <li>
            <button title="Delete invoice" onClick={e => onDeleteClick(invoice.id)}>
              <DeleteIcon size={20} className='text-gray-500' />
            </button>
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default TableItem;
