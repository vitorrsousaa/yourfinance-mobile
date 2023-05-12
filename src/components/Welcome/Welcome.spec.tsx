import React from 'react';

import { render } from '@testing-library/react-native';

import 'jest-styled-components';
import ThemeProvider from '../ThemeProvider';
import Welcome from './Welcome';

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
