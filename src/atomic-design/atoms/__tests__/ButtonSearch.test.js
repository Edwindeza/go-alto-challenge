import { render, screen } from '@testing-library/react';
import ButtonSearch from './../ButtonSearch'

test('renders ButtonSearch should have element buttonSearch', () => {
  render(
		<ButtonSearch />
	);
  expect(screen.getByTestId('buttonSearch')).toBeInTheDocument();
});