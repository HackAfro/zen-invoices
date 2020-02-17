import React, { useContext } from 'react';
import ReactModal from 'react-modal';

import { AppContext } from '../../contexts';
import './index.css';
import InvoiceForm from '../invoice-form';

const InvoiceCreateModal = () => {
  const {
    modalOpen,
    toggleModalState,
    updateInvoice,
    addInvoice,
    isEditing,
    setIsEditing,
    currentInvoice,
    setCurrentInvoice
  } = useContext(AppContext);

  const onCloseRequest = () => {
    if (isEditing) {
      setIsEditing(false);
    }
    setCurrentInvoice({});
    toggleModalState();
  };

  const handleInvoice = invoice => {
    isEditing ? updateInvoice(invoice) : addInvoice(invoice);
    setCurrentInvoice({});
    toggleModalState();
  };

  return (
    <ReactModal
      isOpen={modalOpen}
      contentLabel='Invoice creation modal'
      onRequestClose={onCloseRequest}
      className='dialog w-full md:w-2/5 shadow-2xl border rounded fixed bg-white focus:border-gray-200'
      overlayClassName='overlay'
    >
      <header className='bg-gray-100 px-4 py-4 border-b border-gray-400 flex justify-between items-center'>
        <h3 className='text-xl text-purple-600 tracking-normal font-bold'>
          Create Invoice
        </h3>
        <div>
          <button
            className='text-sm text-gray-800 font-semibold bg-gray-300 px-4 py-1 rounded shadow'
            onClick={toggleModalState}
          >
            Close
          </button>
        </div>
      </header>
      <>
        <InvoiceForm
          currentInvoice={currentInvoice}
          handleInvoice={handleInvoice}
          isEditing={isEditing}
        />
      </>
    </ReactModal>
  );
};

export default InvoiceCreateModal;
