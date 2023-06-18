import { memo } from 'react';

import { TTransaction } from '../../types/Transaction';

import { LastTransactionsView } from './LastTransactions.view';
import { LastTransactionsViewModel } from './LastTransactions.view-model';

export interface LastTransactionsProps {
  transactions: TTransaction[];
  isLoading: boolean;
  hasError: boolean;
  title?: string;
  showFilter?: boolean;
  scrollable?: boolean;
  onSelected?: (transaction: TTransaction) => void;
}

type DefaultProps = Pick<LastTransactionsProps, 'title' | 'scrollable'>;
type Props = LastTransactionsProps & DefaultProps;

const defaultProps: DefaultProps = {
  title: 'Últimas transações',
  scrollable: true,
};

export interface LastTransactionsViewProps
  extends Omit<LastTransactionsProps, ''> {}

function LastTransactions(props: Props) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <LastTransactionsView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = LastTransactionsViewModel();

  return viewModel;
}

LastTransactions.defaultProps = defaultProps;

export default memo(LastTransactions);
