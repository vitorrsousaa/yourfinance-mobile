import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import 'jest-styled-components';
import ThemeProvider from '../ThemeProvider';
import Touchable from './Touchable';

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
