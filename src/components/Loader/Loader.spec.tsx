import React from 'react';
import { render } from '@testing-library/react-native';

import ThemeProvider from '../ThemeProvider';

import Loader from './Loader';

import 'jest-styled-components';

describe('Loader Component', () => {
  it('Should render component when called with default props', () => {
    const rendered = render(
      <ThemeProvider>
        <Loader testID="loader-test" />
      </ThemeProvider>
    );

    rendered.getByTestId('loader-test');
  });
});
