import { useQuery } from 'react-query';

import TransactionsService from '../service/TransactionsService';
import { TTransaction, TTransactionResponse } from '../types/Transaction';

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
  } = useQuery<TTransaction[]>({
    queryKey: ['@transactions'],
    queryFn: () => TransactionsService.list(),
    staleTime: 1000 * 60 * 30, // 30 minutos
    cacheTime: 1000 * 60 * 20, // 20 minutos
  });

  return {
    transactions: transactionsResponse!,
    isErrorTransactions: isError,
    isLoadingTransactions: isLoading,
    refetch,
  };
}
