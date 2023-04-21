import React from 'react';

import { render } from '@testing-library/react';

import MyAccount from './MyAccount';

describe('MyAccount', () => {
  it('Should render component When called with default props', () => {
    // Arrange

    // Act
    const rendered = render(
      <CompositionProvider>
        <MyAccount />
      </CompositionProvider>,
    );

    // Assert
    rendered.getByRole('heading', { name: /MyAccount/i });
  });
});
