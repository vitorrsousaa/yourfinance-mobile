import React from 'react';

import { render } from '@testing-library/react-native';

import 'jest-styled-components';
import LastTransactions from './LastTransactions';
import { TTransaction } from '../../types/Transaction';

describe('Last Transactions Component', () => {
  it('Should render component when called with default props', () => {
    const dataMocked: TTransaction[] = [
      {
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
      },
    ];
    const rendered = render(
      <LastTransactions
        isLoading={false}
        hasError={false}
        transactions={dataMocked}
      />
    );

    rendered.getByText('Default button');
  });

  it('Should render correctly when called with title prop');

  it('Should render correctly when called with showFilter prop');
  it('Should render correctly when called with isLoading prop');
  it('Should render correctly when called with hasError prop');
});
