import React from 'react';

import { render } from '@testing-library/react-native';
import 'jest-styled-components';
import Loader from './Loader';

describe('Loader Component', () => {
  it('Should render component when called with default props', () => {
    const rendered = render(<Loader testID="loader-test" />);

    rendered.getByTestId('loader-test');
  });
});
