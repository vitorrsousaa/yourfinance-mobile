import React from 'react';

import { render } from '@testing-library/react-native';

import 'jest-styled-components';
import LastTransactions from './LastTransactions';
import { TTransaction } from '../../types/Transaction';
import ThemeProvider from '../ThemeProvider';

// yarn test LastTransactions.spec.tsx

describe('Last Transactions Component', () => {
  it('Should render component when called with default props', () => {
    const now = new Date();
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
        description: 'description mocked',
        date: now.toLocaleString(),
        updatedAt: '',
      },
    ];
    const rendered = render(
      <ThemeProvider>
        <LastTransactions
          isLoading={false}
          hasError={false}
          transactions={dataMocked}
        />
      </ThemeProvider>
    );

    expect(rendered.getByText(/^description mocked$/i));
  });

  it('Should render correctly when called with title prop', () => {
    const now = new Date();
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
        description: 'description mocked',
        date: now.toLocaleString(),
        updatedAt: '',
      },
    ];
    const rendered = render(
      <ThemeProvider>
        <LastTransactions
          isLoading={false}
          hasError={false}
          transactions={dataMocked}
          title="Test title"
        />
      </ThemeProvider>
    );

    expect(rendered.getByText(/^test title$/i));
  });

  it('Should render correctly when called with showFilter prop', () => {
    const now = new Date();
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
        description: 'description mocked',
        date: now.toLocaleString(),
        updatedAt: '',
      },
    ];
    const rendered = render(
      <ThemeProvider>
        <LastTransactions
          isLoading={false}
          hasError={false}
          transactions={dataMocked}
          showFilter
        />
      </ThemeProvider>
    );

    expect(rendered.getByTestId(/^data-filter$/i));
  });

  it('Should render correctly when called with isLoading prop', () => {
    const now = new Date();
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
        description: 'description mocked',
        date: now.toLocaleString(),
        updatedAt: '',
      },
    ];
    const rendered = render(
      <ThemeProvider>
        <LastTransactions
          isLoading
          hasError={false}
          transactions={dataMocked}
          showFilter
        />
      </ThemeProvider>
    );

    expect(rendered.queryByText(/^description mocked$/i)).toBeNull();
    expect(rendered.getByTestId(/^data-filter$/i));
  });

  it('Should render correctly when called with hasError prop', () => {
    const now = new Date();
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
        description: 'description mocked',
        date: now.toLocaleString(),
        updatedAt: '',
      },
    ];
    const rendered = render(
      <ThemeProvider>
        <LastTransactions
          isLoading={false}
          hasError
          transactions={dataMocked}
          showFilter
          title="title-test"
        />
      </ThemeProvider>
    );

    expect(rendered.queryByText(/^description mocked$/i)).toBeNull();
    expect(rendered.queryByText(/^data-filter$/i)).toBeNull();
    expect(rendered.queryByText(/^title-test$/i)).toBeNull();
    expect(rendered.getByTestId('data-error-content'));
  });

  it('Should render correctly when called without transactions', () => {
    const rendered = render(
      <ThemeProvider>
        <LastTransactions
          isLoading={false}
          hasError={false}
          transactions={[]}
        />
      </ThemeProvider>
    );

    expect(rendered.getByTestId('data-without-transactions'));
  });
});
