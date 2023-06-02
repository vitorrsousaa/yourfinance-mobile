import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';

import ThemeProvider from '../../components/ThemeProvider';
import { TTransaction } from '../../types/Transaction';

import DetailsTransaction from './DetailsTransaction';

import 'jest-styled-components';

// yarn test DetailsTransaction.spec.tsx

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      goBack: mockNavigate,
    }),
  };
});

const mockUseInvalidadeQueries = jest.fn();
jest.mock('../../hooks/useInvalidateQueries', () => {
  return () => mockUseInvalidadeQueries;
});

jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(),
}));
const mockMutation = jest.fn();
jest.mock('@tanstack/react-query', () => {
  const actualMutation = jest.requireActual('@tanstack/react-query');
  return {
    ...actualMutation,
    useMutation: () => {
      return {
        mutateAsync: () => mockMutation,
      };
    },
  };
});

describe('DetailsTransaction View', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render correctly when called with default props', () => {
    // Arrange
    const transactionMocked: TTransaction = {
      amount: 0,
      category: { id: '123', name: 'Despesas' },
      createdAt: new Date(),
      date: new Date(),
      description: 'DetailsTransaction',
      id: '',
      modality: { category: '', id: '', name: 'Modality' },
      type: 'Fixo',
      updatedAt: new Date(),
    };
    const rendered = render(
      <ThemeProvider>
        <DetailsTransaction
          route={{
            params: { transaction: transactionMocked },
            key: 'Details Transaction',
            name: 'DetailsTransaction',
          }}
        />
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(rendered.getByText(/DetailsTransaction/));
  });

  it('Should render outcome icon when transaction is outcome', () => {
    // Arrange
    const transactionMocked: TTransaction = {
      amount: 0,
      category: { id: '123', name: 'Despesas' },
      createdAt: new Date(),
      date: new Date(),
      description: 'DetailsTransaction',
      id: '',
      modality: { category: '', id: '', name: 'Modality' },
      type: 'Fixo',
      updatedAt: new Date(),
    };
    const rendered = render(
      <ThemeProvider>
        <DetailsTransaction
          route={{
            params: { transaction: transactionMocked },
            key: 'Details Transaction',
            name: 'DetailsTransaction',
          }}
        />
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(rendered.getByTestId(/outcome-icon/));
  });

  it('Should render income icon when transaction is income', () => {
    // Arrange
    const transactionMocked: TTransaction = {
      amount: 0,
      category: { id: '123', name: 'Receitas' },
      createdAt: new Date(),
      date: new Date(),
      description: 'DetailsTransaction',
      id: '',
      modality: { category: '', id: '', name: 'Modality' },
      type: 'Fixo',
      updatedAt: new Date(),
    };
    const rendered = render(
      <ThemeProvider>
        <DetailsTransaction
          route={{
            params: { transaction: transactionMocked },
            key: 'Details Transaction',
            name: 'DetailsTransaction',
          }}
        />
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(rendered.getByTestId(/income-icon/));
  });

  it('Should call function goBack when selected', () => {
    // Arrange
    const transactionMocked: TTransaction = {
      amount: 0,
      category: { id: '123', name: 'Despesas' },
      createdAt: new Date(),
      date: new Date(),
      description: 'DetailsTransaction',
      id: '',
      modality: { category: '', id: '', name: 'Modality' },
      type: 'Fixo',
      updatedAt: new Date(),
    };
    const rendered = render(
      <ThemeProvider>
        <DetailsTransaction
          route={{
            params: { transaction: transactionMocked },
            key: 'Details Transaction',
            name: 'DetailsTransaction',
          }}
        />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByTestId('back-button-header'));

    // Assert
    expect(mockNavigate).toHaveBeenCalled();
  });
});
