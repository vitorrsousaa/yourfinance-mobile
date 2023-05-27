import React from 'react';
import { render } from '@testing-library/react-native';

import ThemeProvider from '../ThemeProvider';

import Radio from './Radio';

describe('Radio', () => {
  it('Should render component When called with default props', () => {
    // Arrange

    // Act
    const rendered = render(
      <ThemeProvider>
        <Radio testID="radio-test" />
      </ThemeProvider>
    );

    // Assert
    rendered.getByTestId('radio-test');
  });
});
