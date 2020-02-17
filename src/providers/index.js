import React, { useEffect, useState } from 'react';
import { AppContext } from '../contexts';
import { invoices as invoiceData, transfers as transferData } from './data';

const AppProvider = ({ children }) => {
  const [invoices, setInvoices] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [transfers, setTransfers] = useState([]);
  const [currentInvoice, setCurrentInvoice] = useState({});
  const [modalOpen, setModalState] = useState(false);

  const fetchData = () => {
    setInvoices(invoiceData);
    setTransfers(transferData);
  };

  const addInvoice = newInvoice => {
    setInvoices([...invoices, newInvoice]);
  };

  const updateInvoice = updatedInvoice => {
    const filteredInvoices = invoices.map(invoice => {
      if (invoice.id === updatedInvoice.id) {
        const update = {
          ...invoice,
          ...updatedInvoice
        };
        console.log('found', { update });
        return update;
      }
      console.log('here')
      return invoice;
    });
    setInvoices(filteredInvoices);
  };

  const getInvoice = invoiceId => {
    return invoices.find(invoice => invoice.id === invoiceId);
  };

  const removeInvoice = invoiceId => {
    setInvoices(invoices.filter(invoice => invoice.id !== invoiceId));
  };

  const toggleModalState = () => {
    setModalState(!modalOpen);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = {
    invoices,
    isEditing,
    transfers,
    getInvoice,
    addInvoice,
    updateInvoice,
    removeInvoice,
    modalOpen,
    toggleModalState,
    currentInvoice,
    setCurrentInvoice,
    setIsEditing
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
