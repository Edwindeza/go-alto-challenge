import { render, screen } from '@testing-library/react';
import Header from './../Header'
import { MemoryRouter } from 'react-router';

test('renders Navbar have logo', () => {
  render(
		<MemoryRouter>			
			<Header />
		</MemoryRouter>
	);
  expect(screen.getByAltText('My Blog')).toBeInTheDocument();
});
test('renders Navbar have Options', () => {
  render(
		<MemoryRouter>			
			<Header />
		</MemoryRouter>
	);
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Blog')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();

});

test('renders Navbar input and button Search', () => {
  render(
		<MemoryRouter>			
			<Header />
		</MemoryRouter>
	);
  expect(screen.getByTestId('buttonSearch')).toBeInTheDocument();
  expect(screen.getByTestId('inputSearch')).toBeInTheDocument();

});
