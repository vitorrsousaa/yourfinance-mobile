import { TTransaction, TTransactionResponse } from '../types/Transaction';
import TransactionsService from '../service/TransactionsService';
import { useQuery } from 'react-query';

export function useTransactions(): {
  transactions: TTransaction[];
  isErrorTransactions: boolean;
  isLoadingTransactions: boolean;
  refetch: () => Promise<unknown>;
} {
  const {
    data: transactionsResponse,
    isError,
    isLoading,
    refetch,
  } = useQuery<TTransactionResponse>({
    queryKey: ['@transactions'],
    queryFn: () => TransactionsService.list(),
    staleTime: 1000 * 60 * 30, // 30 minutos
    cacheTime: 1000 * 60 * 20, // 20 minutos
  });

  const transactions = transactionsResponse?.transactions;

  return {
    transactions: transactions!,
    isErrorTransactions: isError,
    isLoadingTransactions: isLoading,
    refetch,
  };
}
