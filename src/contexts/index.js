import { createContext } from 'react';

export const AppContext = createContext({
  invoices: [],
  transfers: [],
  modalOpen: false,
  isEditing: false,
  currentInvoice: {},
  getInvoice: invoiceId => {},
  getTransfer: transferId => {},
  addInvoice: invoice => {},
  updateInvoice: invoice => {},
  removeInvoice: invoiceId => {},
  toggleModalState: () => {},
  setCurrentInvoice: invoice => {},
  setIsEditing: (editingState) => {}
});
