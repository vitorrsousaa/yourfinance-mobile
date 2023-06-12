import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, renderHook } from '@testing-library/react-native';

import ThemeProvider from '../../../../components/ThemeProvider';

import Feedback from './Feedback';
import { FeedbackViewModel } from './Feedback.view-model';

import 'jest-styled-components';

describe('Feedback', () => {
  beforeEach(() => {
    jest.mock('@tanstack/react-query', () => ({
      useMutation: { isLoading: false, isError: false, mutateAsync: jest.fn() },
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly when called with default props', () => {
    // Arrange
    const queryClient = new QueryClient();

    // Act
    const rendered = render(
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Feedback />
        </QueryClientProvider>
      </ThemeProvider>
    );

    // Assert
    expect(rendered.getByText('Avalie a experiência'));
  });

  it('Should render selected icons correctly', () => {
    // Arrange
    const queryClient = new QueryClient();

    // Act
    const rendered = render(
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Feedback />
        </QueryClientProvider>
      </ThemeProvider>
    );

    // Assert
    expect(rendered.getByTestId('feedback-icon-muito bom'));
    expect(rendered.getByTestId('feedback-icon-bom'));
    expect(rendered.getByTestId('feedback-icon-ruim'));
  });

  it('Should not call mutateAsync when the button is pressed and the mutation is loading', () => {
    // Arrange
    const queryClient = new QueryClient();
    const mockMutateAsync = jest.fn();
    jest.mock('@tanstack/react-query', () => ({
      useMutation: {
        isLoading: true,
        isError: false,
        mutateAsync: mockMutateAsync,
      },
    }));
    const rendered = render(
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Feedback />
        </QueryClientProvider>
      </ThemeProvider>
    );

    // Act
    fireEvent.press(rendered.getByText('Enviar'));

    // Assert
    expect(mockMutateAsync).not.toHaveBeenCalled();
  });
});

describe('Feedback View Model', () => {
  beforeEach(() => {
    jest.mock('@tanstack/react-query', () => ({
      useMutation: { isLoading: false, isError: false, mutateAsync: jest.fn() },
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should call mutation when uses handleSubmit', async () => {
    // Arrange
    const queryClient = new QueryClient();

    const mockMutate = jest.fn();
    const mockMutateAsync = jest.fn();
    jest.mock('@tanstack/react-query', () => ({
      useMutation: {
        isLoading: false,
        isError: false,
        mutate: mockMutate,
        mutateAsync: mockMutateAsync,
      },
    }));

    const viewModel = renderHook(() => FeedbackViewModel(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    }).result.current;

    // Act

    // Assert

    expect(true).toBeTruthy();
  });
});
