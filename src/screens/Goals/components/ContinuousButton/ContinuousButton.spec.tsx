import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { View } from 'react-native';

import ThemeProvider from '../../../../components/ThemeProvider';

import ContinuousButton from './ContinuousButton';

import 'jest-styled-components';

jest.mock('styled-components/native', () => {
  return {
    useTheme: jest.fn().mockReturnValue({
      colors: {
        black: {
          600: '#000',
        },
      },
    }),
  };
});

describe('Continuous Button', () => {
  it('Should render component When called with default props', () => {
    // Arrange

    // Act
    const rendered = render(
      <ThemeProvider>
        <ContinuousButton isValid />
      </ThemeProvider>
    );

    // Assert
    rendered.getByTestId('arrowRight');
  });

  it('Should be disabled when isValid is true', () => {
    // Arrange
    const onPress = jest.fn();
    const rendered = render(
      <ThemeProvider>
        <ContinuousButton isValid onPress={onPress} />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByTestId('arrowRight'));

    // Assert
    expect(onPress).not.toHaveBeenCalled();
  });
  it('Should be enabled when isValid is false', () => {
    // Arrange
    const onPress = jest.fn();
    const rendered = render(
      <ThemeProvider>
        <ContinuousButton isValid onPress={onPress} />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByTestId('arrowRight'));

    // Assert
    expect(onPress).toHaveBeenCalled();
  });
});
