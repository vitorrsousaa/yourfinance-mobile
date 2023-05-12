import { memo } from 'react';

import { TransactionView } from './Transaction.view';
import { TransactionViewModel } from './Transaction.view-model';
import { TTransaction } from '../../../../types/Transaction';

export interface TransactionProps {
  data: TTransaction;
}

export interface TransactionViewProps extends Omit<TransactionProps, ''> {}

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
