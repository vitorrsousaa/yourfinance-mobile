import React from 'react';

import { render } from '@testing-library/react';

import Feedback from './Feedback';

describe('Feedback', () => {
  it('Should render component When called with default props', () => {
    // Arrange

    // Act
    const rendered = render(
      <CompositionProvider>
        <Feedback />
      </CompositionProvider>,
    );

    // Assert
    rendered.getByRole('heading', { name: /Feedback/i });
  });
});
