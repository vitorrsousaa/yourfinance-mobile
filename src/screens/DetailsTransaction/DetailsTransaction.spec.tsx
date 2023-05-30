import React from 'react';
import { render } from '@testing-library/react-native';

import ThemeProvider from '../ThemeProvider';

import DetailsTransaction from './DetailsTransaction';

import 'jest-styled-components';

// yarn test DetailsTransaction.spec.tsx

describe('DetailsTransaction', () => {
  it('Should render correctly when called with default props', () => {
    // Arrange
    const rendered = render(
      <ThemeProvider>
        <DetailsTransaction />
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(rendered.getByTestId(/DetailsTransaction/i));
  });
});
