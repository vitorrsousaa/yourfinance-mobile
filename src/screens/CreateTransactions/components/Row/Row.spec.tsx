import React from 'react';

import { render } from '@testing-library/react';

import Row from './Row';

describe('Row', () => {
  it('Should render component When called with default props', () => {
    // Arrange

    // Act
    const rendered = render(
      <CompositionProvider>
        <Row />
      </CompositionProvider>,
    );

    // Assert
    rendered.getByRole('heading', { name: /Row/i });
  });
});
