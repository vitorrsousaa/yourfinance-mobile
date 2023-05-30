import { memo } from 'react';

import { DetailsTransactionView } from './DetailsTransaction.view';
import { DetailsTransactionViewModel } from './DetailsTransaction.view-model';

export interface DetailsTransactionProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface DetailsTransactionViewProps
    extends Omit<DetailsTransactionProps, ''> {
// Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function DetailsTransaction(props: DetailsTransactionProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return (
      <DetailsTransactionView viewModel={viewModel} props={viewProps} />
  );
}

export function useViewModel(){
  const viewModel = DetailsTransactionViewModel()

  return viewModel;
}

export default memo(DetailsTransaction);
