import React from 'react';
import { render } from '@testing-library/react-native';

import ThemeProvider from '../../../../components/ThemeProvider';

import LabelChart from './LabelChart';

import 'jest-styled-components';

describe('LabelChart', () => {
  it('Should render component  with correct label', () => {
    // Arrange

    // Act
    const rendered = render(
      <ThemeProvider>
        <LabelChart background="#395bfc" label="testing" />
      </ThemeProvider>
    );

    // Assert
    expect(rendered.getByText(/^testing$/i));
  });
});
