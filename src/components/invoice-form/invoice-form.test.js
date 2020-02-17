import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InvoiceForm from './index';

test('Submit should be disabled for incomplete form', () => {
  const { getByText } = render(
    <InvoiceForm
      currentInvoice={{}}
      handleInvoice={jest.fn()}
      isEditing={false}
    />
  );

  expect(getByText(/Submit/i)).toBeInTheDocument();
});

test('clicking retrieve transfer should hide amount field and display next button', () => {
  const { queryByLabelText, getByRole, getByText } = render(
    <InvoiceForm
      currentInvoice={{}}
      handleInvoice={jest.fn()}
      isEditing={false}
    />
  );
  fireEvent(
    getByRole('switch'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  );

  const amountField = queryByLabelText(/Amount/i);
  const nextButton = getByText(/Next/i);
  expect(amountField).not.toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
});

test('providing current invoice should pre-fill form', () => {
  const currentInvoice = {
    id: 33,
    date: '2018-01-11',
    subject: 'Rent January',
    amount: '2200',
    iban: null
  };
  const { getByDisplayValue } = render(
    <InvoiceForm
      currentInvoice={currentInvoice}
      handleInvoice={jest.fn()}
      isEditing={false}
    />
  );
  expect(getByDisplayValue(currentInvoice.subject)).toBeInTheDocument();
  expect(getByDisplayValue(/11\/01\/2018/i)).toBeInTheDocument();
  expect(getByDisplayValue(currentInvoice.amount)).toBeInTheDocument();
});

