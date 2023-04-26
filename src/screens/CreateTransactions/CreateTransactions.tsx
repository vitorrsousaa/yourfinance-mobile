import { memo } from 'react';

import { CreateTransactionsView } from './CreateTransactions.view';
import { CreateTransactionsViewModel } from './CreateTransactions.view-model';

export interface CreateTransactionsProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface CreateTransactionsViewProps
  extends Omit<CreateTransactionsProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function CreateTransactions(props: CreateTransactionsProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <CreateTransactionsView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = CreateTransactionsViewModel();

  return viewModel;
}

export default memo(CreateTransactions);
