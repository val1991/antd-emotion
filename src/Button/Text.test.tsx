import { render, screen } from '@testing-library/react';
import { Text } from './Text';
import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer())


test('Text styles', () => {
  const { asFragment } = render(<Text>test</Text>);
  expect(asFragment()).toMatchSnapshot()
  
  const text = screen.getByText(/test/i);
  expect(text).toBeInTheDocument();

   expect(text).toHaveStyle({
      color: 'red'
    })
});
