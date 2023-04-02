import { memo } from 'react';

import { LastTransactionsView } from './LastTransactions.view';
import { LastTransactionsViewModel } from './LastTransactions.view-model';
import { TTransaction } from '../../types/Transaction';

export interface LastTransactionsProps {
  title?: string;
  showFilter?: boolean;
  transactions: TTransaction[];
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface LastTransactionsViewProps
  extends Omit<LastTransactionsProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function LastTransactions(props: LastTransactionsProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <LastTransactionsView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = LastTransactionsViewModel();

  return viewModel;
}

export default memo(LastTransactions);
