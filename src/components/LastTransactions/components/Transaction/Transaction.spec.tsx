import React from 'react';
import { render } from '@testing-library/react-native';

import { TTransaction } from '../../../../types/Transaction';
import { formatDate } from '../../../../utils/formatDate';
import ThemeProvider from '../../../ThemeProvider';

import Transaction from './Transaction';

import 'jest-styled-components';

// yarn test Transaction.spec.tsx

describe('Transaction Component', () => {
  it('Should render component when called with default props', () => {
    const now = new Date();
    const transactionMocked: TTransaction = {
      id: '',
      amount: 123,
      modality: {
        name: 'Salário',
        id: '',
        category: '',
      },
      category: {
        id: '',
        name: '',
      },
      type: '',
      description: 'description mocked',
      date: now,
      updatedAt: now,
      createdAt: now,
    };

    const rendered = render(
      <ThemeProvider>
        <Transaction data={transactionMocked} />
      </ThemeProvider>
    );

    expect(rendered.getByText(/^description mocked$/i));
    expect(rendered.getByText(/^Salário$/i));
  });

  it('Should render icon correctly according to category Name', () => {
    const now = new Date();
    const transactionOutcome: TTransaction = {
      id: '',
      amount: 123,
      modality: {
        name: '',
        id: '',
        category: '',
      },
      category: {
        id: '',
        name: 'Despesas',
      },
      type: '',
      description: 'description mocked',
      date: now,
      updatedAt: now,
      createdAt: now,
    };
    const transactionIncome: TTransaction = {
      id: '',
      amount: 123,
      modality: {
        name: '',
        id: '',
        category: '',
      },
      category: {
        id: '',
        name: 'Receitas',
      },
      type: '',
      description: 'description mocked',
      date: now,
      updatedAt: now,
      createdAt: now,
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
    const transactionMocked: TTransaction = {
      id: '',
      amount: 123,
      modality: {
        name: '',
        id: '',
        category: '',
      },
      category: {
        id: '',
        name: '',
      },
      type: '',
      description: 'description mocked',
      date: new Date(),
      updatedAt: new Date(),
      createdAt: new Date(),
    };
    const rendered = render(
      <ThemeProvider>
        <Transaction data={transactionMocked} />
      </ThemeProvider>
    );

    expect(rendered.getByText(formatDate(new Date())));
  });

  it('Should render amount correctly with formatAmount', () => {
    const amount = 123.4;
    const transactionMocked: TTransaction = {
      id: '',
      amount: amount,
      modality: {
        name: '',
        id: '',
        category: '',
      },
      category: {
        id: '',
        name: '',
      },
      type: '',
      description: 'description mocked',
      date: new Date(),
      updatedAt: new Date(),
      createdAt: new Date(),
    };
    const rendered = render(
      <ThemeProvider>
        <Transaction data={transactionMocked} />
      </ThemeProvider>
    );

    expect(rendered.getByText('R$ 123,40'));
  });
});
