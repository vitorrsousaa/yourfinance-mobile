import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';

import ThemeProvider from '../../components/ThemeProvider';
import { TTransaction } from '../../types/Transaction';

import { DetailsTransactionView } from './DetailsTransaction.view';
import { DetailsTransactionViewModel } from './DetailsTransaction.view-model';

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

const mockMutation = jest.fn();
jest.mock('@tanstack/react-query', () => {
  const actualMutation = jest.requireActual('@tanstack/react-query');
  return {
    ...actualMutation,
    useMutation: () => {
      return {
        mutateAsync: mockMutation,
      };
    },
  };
});

describe('DetailsTransaction View-Model', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should return correctly getIcon when transaction is outcome', () => {
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
    const viewModel = DetailsTransactionViewModel(transactionMocked);

    // Act
    const rendered = render(viewModel.getIcon());

    // Assert
    expect(rendered.getByTestId('outcome-icon'));
  });
  it('Should return correctly getIcon when transaction is income', () => {
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
    const viewModel = DetailsTransactionViewModel(transactionMocked);

    // Act
    const rendered = render(viewModel.getIcon());

    // Assert
    expect(rendered.getByTestId('income-icon'));
  });
  it('Should call function useNavigation when uses goBack', () => {
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
    const viewModel = DetailsTransactionViewModel(transactionMocked);

    // Act
    viewModel.goBack();

    // Assert
    expect(mockNavigate).toHaveBeenCalled();
  });
  it('Should call navigation when uses handleDeleteTransaction', async () => {
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
    const viewModel = DetailsTransactionViewModel(transactionMocked);

    // Act
    await viewModel.handleDeleteTransaction();

    // Assert
    expect(mockNavigate).toHaveBeenCalled();
  });
  it('Should call mutation when uses handleDeleteTransaction', async () => {
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
    const viewModel = DetailsTransactionViewModel(transactionMocked);

    // Act
    await viewModel.handleDeleteTransaction();

    // Assert
    expect(mockMutation).toHaveBeenCalled();
  });
});

describe('DetailsTransaction View', () => {
  it('Should call function goback when user clicks in the back button', () => {
    // Arrange
    const getIcon = jest.fn();
    const goBack = jest.fn();
    const handleDeleteTransaction = jest.fn();
    const isError = false;
    const isLoading = false;
    const params = {
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
        <DetailsTransactionView
          props={{}}
          viewModel={{
            getIcon,
            goBack,
            handleDeleteTransaction,
            isError,
            isLoading,
            params,
          }}
        />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByTestId('back-button-header'));

    // Assert
    expect(goBack).toHaveBeenCalled();
  });
  it('Should call function handleDelete when user clicks in the delete button', () => {
    // Arrange
    const getIcon = jest.fn();
    const goBack = jest.fn();
    const handleDeleteTransaction = jest.fn();
    const isError = false;
    const isLoading = false;
    const params = {
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
        <DetailsTransactionView
          props={{}}
          viewModel={{
            getIcon,
            goBack,
            handleDeleteTransaction,
            isError,
            isLoading,
            params,
          }}
        />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByTestId('delete-button-header'));

    // Assert
    expect(handleDeleteTransaction).toHaveBeenCalled();
  });
  it('Should call function handleDelete when user clicks in the danger zone button', () => {
    // Arrange
    const getIcon = jest.fn();
    const goBack = jest.fn();
    const handleDeleteTransaction = jest.fn();
    const isError = false;
    const isLoading = false;
    const params = {
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
        <DetailsTransactionView
          props={{}}
          viewModel={{
            getIcon,
            goBack,
            handleDeleteTransaction,
            isError,
            isLoading,
            params,
          }}
        />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByTestId('action-danger-zone'));

    // Assert
    expect(handleDeleteTransaction).toHaveBeenCalled();
  });
  it('Should call function getIcon correctly', () => {
    // Arrange
    const getIcon = jest.fn();
    const goBack = jest.fn();
    const handleDeleteTransaction = jest.fn();
    const isError = false;
    const isLoading = false;
    const params = {
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

    render(
      <ThemeProvider>
        <DetailsTransactionView
          props={{}}
          viewModel={{
            getIcon,
            goBack,
            handleDeleteTransaction,
            isError,
            isLoading,
            params,
          }}
        />
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(getIcon).toHaveBeenCalled();
  });
  it('Should not call function goBack when isLoading', () => {
    // Arrange
    const getIcon = jest.fn();
    const goBack = jest.fn();
    const handleDeleteTransaction = jest.fn();
    const isError = false;
    const isLoading = true;
    const params = {
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
        <DetailsTransactionView
          props={{}}
          viewModel={{
            getIcon,
            goBack,
            handleDeleteTransaction,
            isError,
            isLoading,
            params,
          }}
        />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByTestId('back-button-header'));

    // Assert
    expect(goBack).not.toHaveBeenCalled();
  });
  it('Should not call function handleDelete in Header when isLoading', () => {
    // Arrange
    const getIcon = jest.fn();
    const goBack = jest.fn();
    const handleDeleteTransaction = jest.fn();
    const isError = false;
    const isLoading = true;
    const params = {
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
        <DetailsTransactionView
          props={{}}
          viewModel={{
            getIcon,
            goBack,
            handleDeleteTransaction,
            isError,
            isLoading,
            params,
          }}
        />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByTestId('delete-button-header'));

    // Assert
    expect(handleDeleteTransaction).not.toHaveBeenCalled();
  });
  it('Should not call function handleDelete in DangerZone when isLoading', () => {
    // Arrange
    const getIcon = jest.fn();
    const goBack = jest.fn();
    const handleDeleteTransaction = jest.fn();
    const isError = false;
    const isLoading = true;
    const params = {
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
        <DetailsTransactionView
          props={{}}
          viewModel={{
            getIcon,
            goBack,
            handleDeleteTransaction,
            isError,
            isLoading,
            params,
          }}
        />
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByTestId('action-danger-zone'));

    // Assert
    expect(handleDeleteTransaction).not.toHaveBeenCalled();
  });
});

// view model
// se a function getIcon retorna corretamente
// se a function handleDeleteTransaction executa corretamente
// Se a function goBack retorna corretamente
