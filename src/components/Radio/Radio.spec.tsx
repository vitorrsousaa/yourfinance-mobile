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
  it('Should render icon when user selected', () => {
    // Arrange

    // Act
    const rendered = render(
      <ThemeProvider>
        <Radio testID="radio-test" selected />
      </ThemeProvider>
    );

    // Assert
    rendered.getByTestId('icon-test');
  });
});
