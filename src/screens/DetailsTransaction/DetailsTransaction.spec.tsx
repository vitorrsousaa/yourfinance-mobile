import React from 'react';
import { cleanup, render } from '@testing-library/react-native';

import ThemeProvider from '../../components/ThemeProvider';
import { TTransaction } from '../../types/Transaction';

import DetailsTransaction from './DetailsTransaction';
import { DetailsTransactionViewModel } from './DetailsTransaction.view-model';

import 'jest-styled-components';

// yarn test DetailsTransaction.spec.tsx

describe('DetailsTransaction View', () => {
  beforeEach(() => {
    const mockNavigate = jest.fn();
    jest.mock('@react-navigation/native', () => {
      const actualNav = jest.requireActual('@react-navigation/native');
      return {
        ...actualNav,
        useNavigation: () => ({
          navigate: mockNavigate,
        }),
      };
    });

    const mockUseInvalidadeQueries = jest.fn();
    jest.mock('../../hooks/useInvalidateQueries', () => {
      return () => mockUseInvalidadeQueries;
    });

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
  });

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
      description: 'testing',
      id: '',
      modality: { category: '', id: '', name: 'Modality' },
      type: 'Fixo',
      updatedAt: new Date(),
    };
    const rendered = render(
      <ThemeProvider>
        <DetailsTransaction
          route={{
            name: 'DetailsTransaction',
            key: 'Details',
            params: { transaction: transactionMocked },
          }}
        />
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(rendered.getByText(/DetailsTransaction/));
  });
});

describe('DetailsTransaction View-model', () => {
  beforeEach(() => {
    const mockNavigate = jest.fn();
    jest.mock('@react-navigation/native', () => {
      const actualNav = jest.requireActual('@react-navigation/native');
      return {
        ...actualNav,
        useNavigation: () => ({
          navigate: {
            goBack: mockNavigate,
          },
        }),
      };
    });

    const mockUseInvalidadeQueries = jest.fn();
    jest.mock('../../hooks/useInvalidateQueries', () => {
      return () => mockUseInvalidadeQueries;
    });

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
  });

  afterEach(() => {
    cleanup();
  });

  it('Should call function goBack when uses goBack', () => {
    // Arrange
    const transactionMocked: TTransaction = {
      amount: 0,
      category: { id: '123', name: 'Despesas' },
      createdAt: new Date(),
      date: new Date(),
      description: 'testing',
      id: '',
      modality: { category: '', id: '', name: 'Modality' },
      type: 'Fixo',
      updatedAt: new Date(),
    };
    const viewModel = DetailsTransactionViewModel(transactionMocked);

    // Act

    // Assert
    expect(mockNavigate).toHaveBeenCalled();
  });
});
