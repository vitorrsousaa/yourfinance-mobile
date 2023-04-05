import { useQuery } from 'react-query';
import { TTransactionResponse } from '../types/Transaction';
import TransactionsService from '../service/TransactionsService';
import { useEffect } from 'react';

interface TransactionQueryProps {
  onError: (error: unknown) => void;
  onSettled: () => void;
  onSuccess: (data: TTransactionResponse) => void;
}

export function TransactionQuery({
  onError,
  onSettled,
  onSuccess,
}: TransactionQueryProps) {
  const { data: transactionsResponse } = useQuery<TTransactionResponse>({
    queryKey: ['@transactions'],
    queryFn: () => TransactionsService.list(),
    onError: (error) => onError(error),
    onSuccess: (data) => onSuccess(data),
    onSettled: () => onSettled(),
    staleTime: 1000 * 60 * 60, // 1hour
    cacheTime: 1000 * 60 * 60,
  });

  useEffect(() => {
    if (transactionsResponse) {
      onSuccess(transactionsResponse);
    }
  }, [transactionsResponse, onSuccess]);

  return null;
}
