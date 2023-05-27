import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import ThemeProvider from '../../../../components/ThemeProvider';

import ModalRepeatTransaction from './ModalRepeatTransaction';

import 'jest-styled-components';

// yarn test ModalRepeatTransaction.spec.tsx

describe('ModalRepeatTransaction', () => {
  it('Should render component when called with default props', () => {
    // Arrange
    const month = 7;
    const rendered = render(
      <ThemeProvider>
        <ModalRepeatTransaction
          isVisible={true}
          month={month}
          onToggle={() => {
            /**/
          }}
          onPlus={() => {
            /**/
          }}
          onMinus={() => {
            /**/
          }}
          testID="modal-repeat-transaction"
        />
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(rendered.getByTestId('modal-repeat-transaction'));
    expect(rendered.getByText(month.toString()));
  });

  it('Should render correctly when user selected minus button', () => {
    // Arrange
    const onMinus = jest.fn();
    const rendered = render(
      <ThemeProvider>
        <ModalRepeatTransaction
          isVisible={true}
          month={0}
          onToggle={() => {
            /**/
          }}
          onPlus={() => {
            /**/
          }}
          onMinus={onMinus}
          testID="modal-repeat-transaction"
        />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByTestId('minus-button'));

    // Assert
    expect(onMinus).toBeCalled();
  });

  it('Should render correctly when user selected plus button', () => {
    // Arrange
    const onPlus = jest.fn();
    const rendered = render(
      <ThemeProvider>
        <ModalRepeatTransaction
          isVisible={true}
          month={0}
          onToggle={() => {
            /**/
          }}
          onMinus={() => {
            /**/
          }}
          onPlus={onPlus}
          testID="modal-repeat-transaction"
        />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByTestId('plus-button'));

    // Assert
    expect(onPlus).toBeCalled();
  });
});
