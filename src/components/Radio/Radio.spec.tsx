import React from 'react';

import { render } from '@testing-library/react';

import Radio from './Radio';

describe('Radio', () => {
  it('Should render component When called with default props', () => {
    // Arrange

    // Act
    const rendered = render(<Radio />);

    // Assert
    rendered.getByRole('heading', { name: /Radio/i });
  });
});
