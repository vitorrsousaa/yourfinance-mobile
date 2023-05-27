import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';

import ThemeProvider from '../../../../components/ThemeProvider';

import ContainerInformation from './ContainerInformation';

import 'jest-styled-components';

describe('Container Information', () => {
  it('Should render correctly with props', () => {
    // Arrange
    const rendered = render(
      <ThemeProvider>
        <ContainerInformation
          title="title-container"
          subtitle="subtitle-container"
        >
          <View testID="container-test" />
        </ContainerInformation>
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(rendered.getByTestId('container-test'));
    expect(rendered.getByText(/^title-container$/i));
    expect(rendered.getByText(/^subtitle-container$/i));
  });
});
