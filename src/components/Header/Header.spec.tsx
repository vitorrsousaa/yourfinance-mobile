import React from 'react';

import { render } from '@testing-library/react-native';

import Header from './Header';
import 'jest-styled-components';

describe('Header Component', () => {
  it('Should render component when called with default props', () => {
    const title = 'default title';

    const rendered = render(<Header title={title} />);

    rendered.getByText(title);
  });

  it('Should render correctly leftIcon and execute onPressLeftIcon prop');

  it('Should render correctly rightIcon');
});
