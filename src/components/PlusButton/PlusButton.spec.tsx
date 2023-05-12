import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import 'jest-styled-components';
import ThemeProvider from '../ThemeProvider';
import PlusButton from './PlusButton';

describe('PlusButton Component', () => {
  it('Should render component when called with default props', () => {
    const rendered = render(
      <ThemeProvider>
        <PlusButton testID="plusbutton-test" />
      </ThemeProvider>
    );

    rendered.getByTestId('plusbutton-test');
  });

  it('Should render correctly leftIcon and execute onPressLeftIcon prop', () => {
    const onPress = jest.fn();
    const rendered = render(
      <ThemeProvider>
        <PlusButton testID="plusbutton-test" onPress={onPress} />
      </ThemeProvider>
    );

    const button = rendered.getByTestId('plusbutton-test');
    fireEvent.press(button);

    expect(onPress).toHaveBeenCalled();
  });
});
