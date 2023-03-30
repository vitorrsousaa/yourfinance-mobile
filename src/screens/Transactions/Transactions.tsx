import { memo } from 'react';

import { TransactionsView } from './Transactions.view';
import { TransactionsViewModel } from './Transactions.view-model';

export interface TransactionsProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface TransactionsViewProps extends Omit<TransactionsProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Transactions(props: TransactionsProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <TransactionsView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = TransactionsViewModel();

  return viewModel;
}

export default memo(Transactions);
