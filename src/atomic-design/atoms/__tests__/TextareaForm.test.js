import React from 'react';
import { render, screen } from '@testing-library/react';
import {TextAreaForm} from './../TextAreaForm'


test('renders TextareaForm should have element for testId', () => {
  const id = String(new Date().getSeconds())
  const result = `input-test-${id}`
  render(<TextAreaForm
    type="text"
    id={id}
    value={''}
    onChange={jest.fn()}
    required
    data-testid={`input-test-${id}`}
    minLength={5}
  />);
  expect(screen.getByTestId(result)).toBeInTheDocument();
});