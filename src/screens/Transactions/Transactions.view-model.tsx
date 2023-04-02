import { useState } from 'react';
import { TTransaction } from '../../types/Transaction';

export interface TransactionsViewModelProps {
  transactions: TTransaction[];
  setTransactions: (transactions: TTransaction[]) => void;
}

export function TransactionsViewModel() {
  const [transactions, setTransactions] = useState<TTransaction[]>([]);

  return {
    transactions,
    setTransactions,
  };
}
