import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { createSerializer } from '@emotion/jest';
import { StyleProvider } from '@ant-design/cssinjs';

expect.addSnapshotSerializer(createSerializer())

const onClick = jest.fn();

test('Button styles', () => {
  const styleHolder = document.createElement('div');
  const { asFragment } = render(
    <StyleProvider container={styleHolder}>
  <Button onClick={onClick}>test</Button>
   </StyleProvider>
  );
  expect(asFragment()).toMatchSnapshot()
  
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();

   expect(button).toHaveStyle({
      background: 'red'
    })
});
