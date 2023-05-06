import React from 'react';
import { render } from '@testing-library/react';

import Toggle from './Toggle';

describe('Toggle', () => {
  it('Should render component When called with default props', () => {
    // Arrange

    // Act
    const rendered = render(
      <CompositionProvider>
        <Toggle />
      </CompositionProvider>,
    );

    // Assert
    rendered.getByRole('heading', { name: /Toggle/i });
  });
});
