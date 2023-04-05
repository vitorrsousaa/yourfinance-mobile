import { ReactNode, createContext, useState } from 'react';
import { TTransaction, TTransactionResponse } from '../types/Transaction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TRANSACTIONS_COLLECTION } from '../storage/storageConfig';
import { useQuery } from 'react-query';
import TransactionsService from '../service/TransactionsService';

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextProps {
  // Todas as informações compartilhadas pelo contexto
  transactions: TTransaction[];
}

export const TransactionsContext = createContext<TransactionsContextProps>(
  {} as TransactionsContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TTransaction[]>([]);

  function handleError(error: string) {
    console.log(error);
  }

  // 1 - Verificar se existe as transações no asyncStorage
  // Caso exista, vamos atualizar essas transações no state
  // Caso não exista, vamos fazer a request pro banco para atualizar as transações

  async function loadTransactions() {
    const transactionsSerialized = await AsyncStorage.getItem(
      TRANSACTIONS_COLLECTION
    );

    const transactionsStorage: TTransaction[] = transactionsSerialized
      ? JSON.parse(transactionsSerialized)
      : [];

    if (!transactionsStorage) {
      // Faço a request pro banco para atualizar as transações
      const transactions = useQuery<TTransactionResponse>({
        queryKey: ['@transactions'],
        queryFn: () => TransactionsService.list(),
        onError: () =>
          handleError('Erro dentro function que busca as transações'),
        staleTime: 1000 * 60 * 60, // 1hour
        cacheTime: 1000 * 60 * 60,
      });
    }

    setTransactions(transactionsStorage);
  }

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
