import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';

import ThemeProvider from '../../../../components/ThemeProvider';

import Row from './Row';

describe('Row', () => {
  it('Should render component When called with default props', () => {
    // Arrange

    // Act
    const rendered = render(
      <ThemeProvider>
        <Row icon={<View testID="icon-row" />} />
      </ThemeProvider>
    );

    // Assert
    rendered.getByTestId('icon-row');
  });
});
