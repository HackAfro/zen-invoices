import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

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
