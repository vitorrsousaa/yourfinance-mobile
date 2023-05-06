import React from 'react';
import { render } from '@testing-library/react';

import Select from './Select';

describe('Select', () => {
  it('Should render component When called with default props', () => {
    // Arrange

    // Act
    const rendered = render(
      <CompositionProvider>
        <Select />
      </CompositionProvider>,
    );

    // Assert
    rendered.getByRole('heading', { name: /Select/i });
  });
});
