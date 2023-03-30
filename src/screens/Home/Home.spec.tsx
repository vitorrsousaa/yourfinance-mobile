import React from 'react';

import { render } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('Should render component When called with default props', () => {
    // Arrange

    // Act
    const rendered = render(
      <CompositionProvider>
        <Home />
      </CompositionProvider>,
    );

    // Assert
    rendered.getByRole('heading', { name: /Home/i });
  });
});
