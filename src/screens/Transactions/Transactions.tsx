import { memo, useEffect } from 'react';

import { TransactionsView } from './Transactions.view';
import { TransactionsViewModel } from './Transactions.view-model';
import TransactionsService from '../../service/TransactionsService';
import { TTransaction } from '../../types/Transaction';

export interface TransactionsProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface TransactionsViewProps extends Omit<TransactionsProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
  transactions: TTransaction[];
}

function Transactions(props: TransactionsProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  const { transactions, setTransactions } = viewModel;

  useEffect(() => {
    async function loadTransactions() {
      const dataTransaction = await TransactionsService.list();

      setTransactions(dataTransaction.transactions);
    }

    loadTransactions();
  }, []);

  const newProps = { transactions, ...viewProps };

  return <TransactionsView viewModel={viewModel} props={newProps} />;
}

export function useViewModel() {
  const viewModel = TransactionsViewModel();

  return viewModel;
}

export default memo(Transactions);
