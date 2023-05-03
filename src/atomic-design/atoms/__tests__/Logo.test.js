import { render, screen } from '@testing-library/react';
import Logo from '../Logo'

test('renders Logo should have element altImg', () => {
  const logoAlt = 'My Blog';
  render(
		<Logo />
	);
  expect(screen.getByAltText(logoAlt)).toBeInTheDocument();
});