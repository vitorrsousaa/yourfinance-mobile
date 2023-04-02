import { useState } from 'react';
import { Transaction } from '../../types/Transaction';

export interface TransactionsViewModelProps {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
}

export function TransactionsViewModel() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  return {
    transactions,
    setTransactions,
  };
}
