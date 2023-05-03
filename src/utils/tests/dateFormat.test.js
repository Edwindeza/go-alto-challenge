import { dateFormat } from '../dateFormat';

test('renders learn react link', () => {
  const dateResult = "03/05/2023";
  const dateInput = "2023-05-03T18:50:08.094Z";
  const result = dateFormat(dateInput)

  expect(result).toEqual(dateResult);
});
