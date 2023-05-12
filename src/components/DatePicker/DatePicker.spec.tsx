import React from 'react';
import { render } from '@testing-library/react-native';

import DatePicker from './DatePicker';

describe('DatePicker', () => {
  it('Should render component when called with default props', () => {
    // Arrange

    // Act
    const rendered = render(<DatePicker />);

    // Assert
    rendered.getByText(/DatePicker/i);
  });
});
