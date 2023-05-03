import { render, screen } from '@testing-library/react';
import InputSearch from '../InputSearch'

test('renders InputSearch should have element for testId', () => {
  render(
		<InputSearch />
	);
  expect(screen.getByTestId('inputSearch')).toBeInTheDocument();
});