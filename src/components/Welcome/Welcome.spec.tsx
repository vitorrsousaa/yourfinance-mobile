import React from 'react';
import { render } from '@testing-library/react-native';

import ThemeProvider from '../ThemeProvider';

import Welcome from './Welcome';

import 'jest-styled-components';

describe('Welcome', () => {
  it('Should render correctly with default props', () => {
    const rendered = render(
      <ThemeProvider>
        <Welcome testID="welcome-test" />
      </ThemeProvider>
    );

    expect(rendered.getByTestId('welcome-test'));
  });
});
