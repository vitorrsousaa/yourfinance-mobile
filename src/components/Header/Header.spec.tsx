import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import Header from './Header';
import 'jest-styled-components';
import ThemeProvider from '../ThemeProvider';
import { View } from 'react-native';

describe('Header Component', () => {
  it('Should render component when called with default props', () => {
    const title = 'default title';

    const rendered = render(
      <ThemeProvider>
        <Header title={title} />
      </ThemeProvider>
    );

    rendered.getByText(title);
  });

  it('Should render correctly leftIcon and execute onPressLeftIcon prop', () => {
    const onPressLeftIcon = jest.fn();
    const rendered = render(
      <ThemeProvider>
        <Header title={'default title'} onPressLeftIcon={onPressLeftIcon} />
      </ThemeProvider>
    );

    const leftIcon = rendered.getByTestId('left-icon');
    fireEvent.press(leftIcon);

    expect(onPressLeftIcon).toHaveBeenCalled();
  });

  it('Should render correctly rightIcon', () => {
    const title = 'default title';

    const rendered = render(
      <ThemeProvider>
        <Header title={title} rightIcon={<View testID="view-test" />} />
      </ThemeProvider>
    );

    expect(rendered.getByTestId('view-test'));
  });
});
