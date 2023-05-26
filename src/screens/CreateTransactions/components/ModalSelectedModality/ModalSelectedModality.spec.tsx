import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import ThemeProvider from '../../../../components/ThemeProvider';
import { TModality } from '../../../../types/Modality';

import ModalSelectedModality from './ModalSelectedModality';

import 'jest-styled-components';

// yarn test ModalSelectedModality.spec.tsx

describe('ModalSelectedModality', () => {
  it('Should render correctly when called with default props', () => {
    // Arrange
    const onToggle = jest.fn();
    const onPress = jest.fn();
    const dataMocked: TModality[] = [
      {
        category: '',
        id: '123456',
        name: 'Modality 1',
      },
      {
        category: '',
        id: '1234568',
        name: 'Modality 2',
      },
    ];
    const rendered = render(
      <ThemeProvider>
        <ModalSelectedModality
          isVisible
          data={dataMocked}
          onPressItem={onPress}
          onToggle={onToggle}
          selectedModality={null}
          testID="modal-selected-modality"
        />
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(rendered.getByTestId('modal-selected-modality'));
    expect(rendered.getByText(/^Modality 1$/i));
  });

  it('Should behavior correctly when user selected modality', () => {
    // Arrange
    const onToggle = jest.fn();
    const onPress = jest.fn();
    const dataMocked: TModality[] = [
      {
        category: '',
        id: '123456',
        name: 'Modality 1',
      },
      {
        category: '',
        id: '1234568',
        name: 'Modality 2',
      },
    ];
    const rendered = render(
      <ThemeProvider>
        <ModalSelectedModality
          isVisible
          data={dataMocked}
          onPressItem={onPress}
          onToggle={onToggle}
          selectedModality={null}
          testID="modal-selected-modality"
        />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByText(/^Modality 1$/i));

    // Assert
    expect(onPress).toBeCalled();
    expect(onToggle).toBeCalled();
  });
});
