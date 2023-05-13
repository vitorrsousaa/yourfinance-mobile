import { memo } from 'react';

import { THistoricGoal } from '../../../../../../types/Goal';

import { TransactionDetailHistoricView } from './TransactionDetailHistoric.view';
import { TransactionDetailHistoricViewModel } from './TransactionDetailHistoric.view-model';

export interface TransactionDetailHistoricProps {
  transaction: THistoricGoal;
}

export interface TransactionDetailHistoricViewProps
  extends Omit<TransactionDetailHistoricProps, ''> {}

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
