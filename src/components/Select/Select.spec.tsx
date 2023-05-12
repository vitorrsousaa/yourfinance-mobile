import React from 'react';

import { render } from '@testing-library/react-native';

import Select, { SelectOptions } from './Select';
import ThemeProvider from '../ThemeProvider';

describe('Select', () => {
  it('Should render component When called with default props', () => {
    // Arrange
    const dataMocked: SelectOptions[] = [
      {
        label: 'test1',
        value: 'test1',
      },
      {
        label: 'test2',
        value: 'test2',
      },
    ];
    const rendered = render(
      <ThemeProvider>
        <Select data={dataMocked} testID="select-test" />
      </ThemeProvider>
    );

    // Assert
    expect(rendered.getByTestId('select-test'));
  });
});
