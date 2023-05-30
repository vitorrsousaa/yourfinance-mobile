import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';

import ThemeProvider from './ThemeProvider';

import 'jest-styled-components';

describe('ThemeProvider', () => {
  it('Should render component when called with default props', () => {
    // Arrange

    // Act
    const rendered = render(
      <ThemeProvider>
        <View testID="children-data" />
      </ThemeProvider>
    );

    // Assert
    expect(rendered.getByTestId('children-data'));
  });
});
