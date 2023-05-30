import { memo } from 'react';

import { TTransaction } from '../../../../types/Transaction';

import { TransactionView } from './Transaction.view';
import { TransactionViewModel } from './Transaction.view-model';

export interface TransactionProps {
  data: TTransaction;
  onSelected?: (transaction: TTransaction) => void;
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
