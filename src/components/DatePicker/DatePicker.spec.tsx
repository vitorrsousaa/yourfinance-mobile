import React from 'react';
import { render } from '@testing-library/react-native';

import ThemeProvider from '../ThemeProvider';

import DatePicker from './DatePicker';

describe('DatePicker', () => {
  it('Should render component when called with default props', () => {
    // Arrange

    // Act
    const rendered = render(
      <ThemeProvider>
        <DatePicker
          visible
          style={{ backgroundColor: '#FFF' }}
          value={new Date()}
          testID="date-picker"
        />
      </ThemeProvider>
    );

    // Assert
    rendered.getByTestId('date-picker');
  });
});
