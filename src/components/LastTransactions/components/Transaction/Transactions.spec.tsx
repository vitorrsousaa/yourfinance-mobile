import React from 'react';

import { render } from '@testing-library/react-native';

import 'jest-styled-components';
import Transaction from './Transaction';
import { TTransaction } from '../../../../types/Transaction';

describe('Transaction Component', () => {
  it('Should render component when called with default props', () => {
    const transactionMocked: TTransaction = {
      _id: '',
      amount: 123,
      __v: 0,
      modality: {
        name: '',
        __v: 0,
        _id: '',
        category: '',
      },
      category: {
        _id: '',
        name: '',
        __v: 0,
      },
      type: '',
      user: '',
      description: '',
      date: '',
      updatedAt: '',
    };

    const rendered = render(<Transaction data={transactionMocked} />);

    rendered.getByText('Default button');
  });

  it('Should render icon correctly according to category Name');

  it('Should render amount correctly with formatAmount');
  it('Should render date correctly with formatDate');
});
