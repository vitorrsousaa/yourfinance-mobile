import React from 'react';
<<<<<<< HEAD
import { render } from '@testing-library/react';
=======

import { render } from '@testing-library/react-native';
>>>>>>> 6cb0cbf0f62c8eb0329fe630f43513432e8edc7b

import Select from './Select';

describe('Select', () => {
  it('Should render component When called with default props', () => {
    // Arrange

    // Act
    const rendered = render(<Select />);

    // Assert
    rendered.getByRole('heading', { name: /Select/i });
  });
});
