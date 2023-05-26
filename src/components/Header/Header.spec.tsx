import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { View } from 'react-native';

import ThemeProvider from '../ThemeProvider';

import Header from './Header';

import 'jest-styled-components';

describe('Header Component', () => {
  it('Should render component when called with default props', () => {
    const title = 'default title';

    const rendered = render(
      <ThemeProvider>
        <Header title={title} />
      </ThemeProvider>
    );

    expect(rendered.getByText(title));
    expect(rendered.getByTestId('left-icon'));
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

  it('Should render correctly without left icon', () => {
    const title = 'default title';

    const rendered = render(
      <ThemeProvider>
        <Header title={title} leftIcon={false} />
      </ThemeProvider>
    );

    expect(rendered.queryByTestId('left-icon')).toBeNull();
  });
});
