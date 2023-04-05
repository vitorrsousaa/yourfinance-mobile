import { ReactNode, createContext, useEffect, useState } from 'react';
import { TTransaction, TTransactionResponse } from '../types/Transaction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TRANSACTIONS_COLLECTION } from '../storage/storageConfig';
import { useQuery } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query';

import TransactionsService from '../service/TransactionsService';

const queryClient = new QueryClient();

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextProps {
  // Todas as informações compartilhadas pelo contexto
  transactions: TTransaction[];
  loadingTransactions: boolean;
  errorTransactions: boolean;
}

export const TransactionsContext = createContext<TransactionsContextProps>(
  {} as TransactionsContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TTransaction[]>([]);
  const [loadingTransactions, setLoadingTransactions] = useState(true);
  const [errorTransactions, setErrorTransactions] = useState(false);

  // 1 - Verificar se existe as transações no asyncStorage
  // Caso exista, vamos atualizar essas transações no state
  // Caso não exista, vamos fazer a request pro banco para atualizar as transações

  useEffect(() => {
    loadTransactions();
  }, []);

  async function loadTransactions() {
    const transactionsSerialized = await AsyncStorage.getItem(
      TRANSACTIONS_COLLECTION
    );

    const transactionsStorage: TTransaction[] = transactionsSerialized
      ? JSON.parse(transactionsSerialized)
      : [];

    if (transactionsStorage.length === 0) {
      console.log('aqui dentro');
      // Faço a request pro banco para atualizar as transações
      const { data: transactionsResponse } = useQuery<TTransactionResponse>({
        queryKey: ['@transactions'],
        queryFn: () => TransactionsService.list(),
        onError: () => setErrorTransactions(true),
        onSuccess: (data) => {
          setTransactions(data.transactions);
        },
        onSettled: () => setLoadingTransactions(false),
        staleTime: 1000 * 60 * 60, // 1hour
        cacheTime: 1000 * 60 * 60,
      });

      AsyncStorage.setItem(
        TRANSACTIONS_COLLECTION,
        JSON.stringify(transactionsResponse?.transactions)
      );

      console.log('response context', transactionsResponse);
    }

    setTransactions(transactionsStorage);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, loadingTransactions, errorTransactions }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </TransactionsContext.Provider>
  );
}
