import { TTransaction } from '../../types/Transaction';
import { useTransactions } from '../../hooks/useTransactions';

export interface TransactionsViewModelProps {
  transactions: TTransaction[];
  errorTransactions: boolean;
  loadingTransactions: boolean;
}

export function TransactionsViewModel() {
  const { transactions, errorTransactions, loadingTransactions } =
    useTransactions();

  return {
    transactions,
    errorTransactions,
    loadingTransactions,
  };
}
