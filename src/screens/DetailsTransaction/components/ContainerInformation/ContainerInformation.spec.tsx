import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';

import ThemeProvider from '../../../../components/ThemeProvider';
import formatAmount from '../../../../utils/formatAmout';

import ContainerInformation from './ContainerInformation';

import 'jest-styled-components';

// yarn test ContainerInformation.spec.tsx

describe('ContainerInformation', () => {
  it('Should render correctly modality', () => {
    // Arrange
    const rendered = render(
      <ThemeProvider>
        <ContainerInformation
          description="description"
          modality="modality"
          amount={123}
          icon={<View testID="icon" />}
        />
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(rendered.getByText('modality'));
  });
  it('Should render correctly description', () => {
    // Arrange
    const rendered = render(
      <ThemeProvider>
        <ContainerInformation
          description="description"
          modality="modality"
          amount={123}
          icon={<View testID="icon" />}
        />
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(rendered.getByText('description'));
  });
  it('Should render correctly icon', () => {
    // Arrange
    const rendered = render(
      <ThemeProvider>
        <ContainerInformation
          description="description"
          modality="modality"
          amount={123}
          icon={<View testID="icon" />}
        />
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(rendered.getByTestId('icon'));
  });
  it('Should render correctly amount', () => {
    // Arrange
    const rendered = render(
      <ThemeProvider>
        <ContainerInformation
          description="description"
          modality="modality"
          amount={123}
          icon={<View testID="icon" />}
        />
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(rendered.getByText(formatAmount(123)));
  });
});
