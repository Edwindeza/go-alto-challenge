import { render, screen } from '@testing-library/react';
import DefaultImage from './../DefaultImage'

test('renders DefaultImage should have element fro altImg', () => {
	const srcImg ="https://res.cloudinary.com/openlab-pe/image/upload/v1682922525/React.png"
	const altImg ="Random Image"
  render(<DefaultImage srcImg={srcImg} altImg={altImg} />);
  expect(screen.getByAltText(altImg)).toBeInTheDocument();
});