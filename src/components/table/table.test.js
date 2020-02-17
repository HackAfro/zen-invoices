import React from 'react';
import { render } from '@testing-library/react';
import Table from './index';

jest.mock('react', () => {
  const ActualReact = require.requireActual('react')
  return {
    ...ActualReact,
    useContext: () => ({invoices: [
      {
        id: 33,
        date: '2018-01-11',
        subject: 'Rent January',
        amount: '2200',
        iban: null
      },
      {
        id: 13,
        date: '2018-02-23',
        subject: 'Rent February',
        amount: '400',
        iban: 'DE-01-0000-2233-33222-12'
      }
    ] }), // what you want to return when useContext get fired goes here
  }
})


test('Empty context returns no values', () => {
  const { container } = render(<Table />);
  const rows = container.querySelectorAll('tbody>tr');
  
  expect(rows.length).toEqual(2);
});