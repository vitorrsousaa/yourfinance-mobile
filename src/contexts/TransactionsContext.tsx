import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { TTransaction, TTransactionResponse } from '../types/Transaction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TRANSACTIONS_COLLECTION } from '../storage/storageConfig';
import { QueryClient, QueryClientProvider } from 'react-query';

import { TransactionQuery } from '../query/TransactionsQuery';

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
      setLoadingTransactions(true);
      setErrorTransactions(false);
    }

    setTransactions(transactionsStorage);
    setLoadingTransactions(false);
  }

  const handleErrorQuery = useCallback((error: unknown) => {
    console.log(error);
    setErrorTransactions(true);
  }, []);

  const handleCompleteQuery = useCallback(() => {
    setLoadingTransactions(false);
  }, []);

  const handleSuccessQuery = useCallback((data: TTransactionResponse) => {
    setTransactions(data.transactions);
    AsyncStorage.setItem(
      TRANSACTIONS_COLLECTION,
      JSON.stringify(data.transactions)
    );
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        loadingTransactions,
        errorTransactions,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <TransactionQuery
          onError={handleErrorQuery}
          onSettled={handleCompleteQuery}
          onSuccess={handleSuccessQuery}
        />
        {children}
      </QueryClientProvider>
    </TransactionsContext.Provider>
  );
}
