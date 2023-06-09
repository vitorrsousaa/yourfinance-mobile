import React from 'react';
import { render } from '@testing-library/react-native';

import ThemeProvider from '../ThemeProvider';

import Feedback from './Feedback';

import 'jest-styled-components';

// yarn test Feedback.spec.tsx

describe('Feedback', () => {
  it('Should render correctly when called with default props', () => {
    // Arrange
    const rendered = render(
      <ThemeProvider>
        <Feedback />
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(rendered.getByTestId(/^Feedback$/i));
  });
});
