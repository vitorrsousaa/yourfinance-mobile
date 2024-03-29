import React from 'react';
import { render } from '@testing-library/react-native';

import ThemeProvider from '../ThemeProvider';

import Toggle from './Toggle';

import 'jest-styled-components';

describe('Toggle Component', () => {
  it('Should render component when called with default props', () => {
    const rendered = render(
      <ThemeProvider>
        <Toggle testID="toggle-test" />
      </ThemeProvider>
    );

    expect(rendered.getByTestId('toggle-test'));
  });
});

