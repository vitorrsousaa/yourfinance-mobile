import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import ThemeProvider from '../ThemeProvider';

import Touchable from './Touchable';

import 'jest-styled-components';

describe('Touchable Component', () => {
  it('Should render component when called with default props', () => {
    const rendered = render(
      <ThemeProvider>
        <Touchable item="arrow" testID="touchable-test" />
      </ThemeProvider>
    );

    rendered.getByTestId('touchable-test');
  });

  it('Should render correctly when user press the component', () => {
    const onPress = jest.fn();
    const rendered = render(
      <ThemeProvider>
        <Touchable item="arrow" testID="touchable-test" onPress={onPress} />
      </ThemeProvider>
    );

    const touchable = rendered.getByTestId('touchable-test');
    fireEvent.press(touchable);

    expect(onPress).toHaveBeenCalled();
  });
});
