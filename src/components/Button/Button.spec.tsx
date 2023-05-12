import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';
import Button from './Button';
import 'jest-styled-components';
import ThemeProvider from '../ThemeProvider';

describe('Button Component', () => {
  it('Should render component when called with default props', () => {
    const onPress = jest.fn();
    const rendered = render(
      <ThemeProvider>
        <Button variant="primary" testID="button-test" onPress={onPress}>
          Default button
        </Button>
      </ThemeProvider>
    );

    const button = rendered.getByTestId('button-test');
    fireEvent.press(button);

    expect(onPress).toHaveBeenCalled();
  });

  it('Should render correctly when called with disabled prop', () => {
    const onPress = jest.fn();
    const rendered = render(
      <ThemeProvider>
        <Button
          variant="primary"
          onPress={onPress}
          disabled
          testID="button-test"
        >
          Default button
        </Button>
      </ThemeProvider>
    );

    const button = rendered.getByTestId('button-test');
    fireEvent.press(button);

    expect(onPress).not.toHaveBeenCalled();
  });

  it('Should render correctly when called with loading prop', () => {
    const onPress = jest.fn();
    const rendered = render(
      <ThemeProvider>
        <Button
          variant="primary"
          onPress={onPress}
          loading
          testID="button-test"
        >
          Default button
        </Button>
      </ThemeProvider>
    );

    const button = rendered.getByTestId('button-test');
    fireEvent.press(button);

    expect(rendered.queryByText('Default button')).toBeNull();
    expect(onPress).not.toHaveBeenCalled();
  });
});
