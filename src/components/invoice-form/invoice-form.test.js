import React from 'react';
import { render } from '@testing-library/react';
import InvoiceForm from './index';

jest.mock('react', () => {
  const ActualReact = require.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => ({
      currentInvoice: {
        id: 33,
        date: '2018-01-11',
        subject: 'Rent January',
        amount: '2200',
        iban: null
      }
    }) // what you want to return when useContext get fired goes here
  };
});

test('Submit should be disabled for incomplete form', () => {
  const { container } = render(
    <InvoiceForm
      currentInvoice={{}}
      handleInvoice={jest.fn()}
      isEditing={false}
    />
  );

  expect( (container.querySelector('button[disabled="true"]')).toBeInDocument()
  ˝
});
});
