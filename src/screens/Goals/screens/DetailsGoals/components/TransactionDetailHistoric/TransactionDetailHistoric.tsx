import { memo } from 'react';

import { TransactionDetailHistoricView } from './TransactionDetailHistoric.view';
import { TransactionDetailHistoricViewModel } from './TransactionDetailHistoric.view-model';
import { THistoricTransaction } from '../../../../../../types/Goal';

export interface TransactionDetailHistoricProps {
  transaction: THistoricTransaction;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface TransactionDetailHistoricViewProps
  extends Omit<TransactionDetailHistoricProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function TransactionDetailHistoric(props: TransactionDetailHistoricProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return (
    <TransactionDetailHistoricView viewModel={viewModel} props={viewProps} />
  );
}

export function useViewModel() {
  const viewModel = TransactionDetailHistoricViewModel();

  return viewModel;
}

export default memo(TransactionDetailHistoric);
