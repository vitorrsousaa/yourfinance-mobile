import React from 'react';

import { render } from '@testing-library/react-native';

import 'jest-styled-components';
import Transaction from './Transaction';
import { TTransaction } from '../../../../types/Transaction';
import ThemeProvider from '../../../ThemeProvider';

// yarn test Transaction.spec.tsx

describe('Transaction Component', () => {
  it('Should render component when called with default props', () => {
    const now = new Date();
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
      description: 'description mocked',
      date: now.toLocaleString(),
      updatedAt: '',
    };

    const rendered = render(
      <ThemeProvider>
        <Transaction data={transactionMocked} />
      </ThemeProvider>
    );

    expect(rendered.getByText(/^description mocked$/i));
  });

  it('Should render icon correctly according to category Name', () => {
    const now = new Date();
    const transactionOutcome: TTransaction = {
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
        name: 'Despesas',
        __v: 0,
      },
      type: '',
      user: '',
      description: 'description mocked',
      date: now.toLocaleString(),
      updatedAt: '',
    };
    const transactionIncome: TTransaction = {
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
        name: 'Receitas',
        __v: 0,
      },
      type: '',
      user: '',
      description: 'description mocked',
      date: now.toLocaleString(),
      updatedAt: '',
    };

    const renderedIncome = render(
      <ThemeProvider>
        <Transaction data={transactionIncome} />
      </ThemeProvider>
    );
    const renderedOutcome = render(
      <ThemeProvider>
        <Transaction data={transactionOutcome} />
      </ThemeProvider>
    );

    expect(renderedIncome.getByTestId('income-icon'));
    expect(renderedOutcome.getByTestId('outcome-icon'));
  });

  it('Should render date correctly with formatDate', () => {
    const date = '2023-05-10T12:34:56Z';
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
      description: 'description mocked',
      date: date,
      updatedAt: '',
    };
    const rendered = render(
      <ThemeProvider>
        <Transaction data={transactionMocked} />
      </ThemeProvider>
    );

    expect(rendered.getByText('10/05/2023'));
  });

  it('Should render amount correctly with formatAmount', () => {
    const date = '2023-05-10T12:34:56Z';
    const transactionMocked: TTransaction = {
      _id: '',
      amount: 123.4,
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
      description: 'description mocked',
      date: date,
      updatedAt: '',
    };
    const rendered = render(
      <ThemeProvider>
        <Transaction data={transactionMocked} />
      </ThemeProvider>
    );

    expect(rendered.getByText('R$ 123,40'));
  });
});
