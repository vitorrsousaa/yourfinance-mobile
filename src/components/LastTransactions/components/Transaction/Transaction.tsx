import { memo } from 'react';

import { TransactionView } from './Transaction.view';
import { TransactionViewModel } from './Transaction.view-model';

export interface TransactionProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface TransactionViewProps extends Omit<TransactionProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Transaction(props: TransactionProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <TransactionView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = TransactionViewModel();

  return viewModel;
}

export default memo(Transaction);
