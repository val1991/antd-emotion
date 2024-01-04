import { render, screen } from '@testing-library/react';
import { Text } from './Text';
import { createSerializer } from '@emotion/jest';
import { StyleProvider } from '@ant-design/cssinjs';

expect.addSnapshotSerializer(createSerializer())

test('Text styles', () => {
  const styleHolder = document.createElement('div');
  const { asFragment } = render(
    <StyleProvider container={styleHolder}>
  <Text>test</Text>
  </StyleProvider>
  );
  expect(asFragment()).toMatchSnapshot()
  
  const text = screen.getByText(/test/i);
  expect(text).toBeInTheDocument();

   expect(text).toHaveStyle({
      color: 'red'
    })
});
