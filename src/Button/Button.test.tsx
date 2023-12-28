import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer())


test('Button styles', () => {
  const { asFragment } = render(<Button>test</Button>);
  expect(asFragment()).toMatchSnapshot()
  
  const button = screen.getByText(/test/i);
  expect(button).toBeInTheDocument();

   expect(button).toHaveStyle({
      background: 'red'
    })
});
