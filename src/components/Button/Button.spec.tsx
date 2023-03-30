import React from 'react';

import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('Should render component When called with default props', () => {
    // Arrange

    // Act
    const rendered = render(
      <CompositionProvider>
        <Button />
      </CompositionProvider>,
    );

    // Assert
    rendered.getByRole('heading', { name: /Button/i });
  });
});
