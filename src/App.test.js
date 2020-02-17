import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

// jest.mock('react', () => {
//   const ActualReact = require.requireActual('react');
//   return {
//     ...ActualReact,
//     useContext: () => ({
//       invoices: [
//         {
//           id: 33,
//           date: '2018-01-11',
//           subject: 'Rent January',
//           amount: '2200',
//           iban: null
//         }
//       ],
//     }) // what you want to return when useContext get fired goes here
//   };
// });

test('shows invoice creation modal', () => {
  const { getByText } = render(<App />);

  const newButton = getByText(/Add Invoice/i);

  fireEvent(
    newButton,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  );

  expect(getByText(/Create Invoice/i)).toBeInTheDocument();
});

// test('edit click pre-fills the form', () => {
//   const { getByTitle, getByDisplayValue } = render(<App />);

//   const editButton = getByTitle(/Edit Invoice/i);

//   fireEvent(
//     editButton,
//     new MouseEvent('click', {
//       bubbles: true,
//       cancelable: true
//     })
//   );

//   expect(getByDisplayValue(/Rent January/i)).toBeInTheDocument();
//   expect(getByDisplayValue(/2018-01-11/i)).toBeInTheDocument();
//   expect(getByDisplayValue(/2200/i)).toBeInTheDocument();
// });
