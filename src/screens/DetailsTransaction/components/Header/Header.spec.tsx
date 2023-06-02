import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import ThemeProvider from '../../../../components/ThemeProvider';
import { formatCompleteDate } from '../../../../utils/formatDate';

import Header from './Header';

import 'jest-styled-components';

// yarn test Header.spec.tsx

describe('Header', () => {
  it('Should render correctly date', () => {
    // Arrange
    const onBack = jest.fn();
    const onDelete = jest.fn();
    const disabled = false;
    const date = new Date();
    const rendered = render(
      <ThemeProvider>
        <Header
          date={date}
          onBack={onBack}
          onDelete={onDelete}
          disabled={disabled}
        />
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(rendered.getByText(formatCompleteDate(date)));
  });
  it('Should call function onBack when user press back button', () => {
    // Arrange
    const onBack = jest.fn();
    const onDelete = jest.fn();
    const disabled = false;
    const date = new Date();
    const rendered = render(
      <ThemeProvider>
        <Header
          date={date}
          onBack={onBack}
          onDelete={onDelete}
          disabled={disabled}
        />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByTestId('back-button'));

    // Assert
    expect(onBack).toHaveBeenCalled();
  });
  it('Should call function onDelete when user press delete button', () => {
    // Arrange
    const onBack = jest.fn();
    const onDelete = jest.fn();
    const disabled = false;
    const date = new Date();
    const rendered = render(
      <ThemeProvider>
        <Header
          date={date}
          onBack={onBack}
          onDelete={onDelete}
          disabled={disabled}
        />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByTestId('delete-button'));

    // Assert
    expect(onDelete).toHaveBeenCalled();
  });
  it('Should not call function onDelete when user press delete button with disabled', () => {
    // Arrange
    const onBack = jest.fn();
    const onDelete = jest.fn();
    const disabled = true;
    const date = new Date();
    const rendered = render(
      <ThemeProvider>
        <Header
          date={date}
          onBack={onBack}
          onDelete={onDelete}
          disabled={disabled}
        />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByTestId('delete-button'));

    // Assert
    expect(onDelete).not.toHaveBeenCalled();
  });
});
