import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import ThemeProvider from '../ThemeProvider';

import DangerZone from './DangerZone';

import 'jest-styled-components';

// yarn test DangerZone.spec.tsx

describe('DangerZone', () => {
  it('Should render correctly when called with default props', () => {
    // Arrange
    const onAction = jest.fn();

    // Act
    const rendered = render(
      <ThemeProvider>
        <DangerZone action="action testing" onAction={onAction} />
      </ThemeProvider>
    );

    // Assert
    expect(rendered.getByText(/action testing/i));
  });
  it('Should render correctly when user selected onAction', () => {
    // Arrange
    const onAction = jest.fn();
    const rendered = render(
      <ThemeProvider>
        <DangerZone action="action testing" onAction={onAction} />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByText(/action testing/i));

    // Assert
    expect(onAction).toHaveBeenCalled();
  });
  it('Should does not selected when button isLoading', () => {
    // Arrange
    const onAction = jest.fn();
    const rendered = render(
      <ThemeProvider>
        <DangerZone
          action="action testing"
          onAction={onAction}
          isLoading={true}
        />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByTestId('action-danger-zone'));

    // Assert
    expect(rendered.queryByText(/action testing/i)).toBeNull();
    expect(onAction).not.toHaveBeenCalled();
  });
});
