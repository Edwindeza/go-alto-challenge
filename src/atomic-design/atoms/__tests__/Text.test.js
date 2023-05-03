import { render, screen } from '@testing-library/react';
import Text from '../Text'
import { type_texts } from '../../../data/types_text';

test('renders Text should have default tpye', () => {
    const testText = 'lorem'
    render(
          <Text text={testText} />
      );
    expect(screen.getByText(testText)).toBeInTheDocument();
  });
  test('renders Text should have default title', () => {
    const testText = 'lorem2'
    render(
          <Text text={testText} type={type_texts['title']} />
      );
    expect(screen.getByText(testText)).toBeInTheDocument();
  });
  test('renders Text should have default bit_description', () => {
    const testText = 'lorem3'
    render(
          <Text text={testText} type={type_texts['bit_description']} />
      );
      expect(screen.getByText(testText)).toBeInTheDocument();
  });