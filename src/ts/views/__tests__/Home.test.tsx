import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';

test('test', () => {
  const wrapper = render(<Home />);
  expect(
    wrapper.getByText(
      "HELLOOOO"
    )
  )
});
