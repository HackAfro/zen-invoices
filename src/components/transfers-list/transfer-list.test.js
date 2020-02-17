import React from 'react';
import { render } from '@testing-library/react';
import TransferList from './index';

jest.mock('react', () => {
  const ActualReact = require.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => ({
      transfers: [
        {
          id: 53,
          subject: 'Rent January',
          amount: '230',
          iban: 'DE-01-0000-2233-33222-12'
        },
        {
          id: 50,
          subject: 'Rent June',
          amount: '110',
          iban: 'DE-01-0000-2233-33242-10'
        }
      ]
    }) // what you want to return when useContext get fired goes here
  };
});

test('renders correct number of items', () => {
  const { getAllByRole } = render(
    <TransferList selectTransfer={jest.fn()} selectedTransfer={{}} />
  );
  const items = getAllByRole('button');
  expect(items.length).toEqual(2);
});
