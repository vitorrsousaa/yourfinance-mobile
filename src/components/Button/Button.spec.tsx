import React from 'react';

import { render } from '@testing-library/react-native';
import Button from './Button';
import 'jest-styled-components';

describe('Button Component', () => {
  it('Should render component when called with default props', () => {
    const rendered = render(<Button variant="primary">Default button</Button>);

    rendered.getByText('Default button');
  });

  it('Should render correctly when called with disabled prop');

  it('Should render correctly when called with loading prop');
});
