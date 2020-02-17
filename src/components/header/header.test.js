import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

test('renders header', () => {
  const { getByText } = render(<Header />);
  const buttonText = getByText(/Add Invoice/i);
  expect(buttonText).toBeInTheDocument();
});