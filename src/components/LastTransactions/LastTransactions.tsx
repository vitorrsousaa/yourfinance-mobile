import { memo } from 'react';

import { TTransaction } from '../../types/Transaction';

import { LastTransactionsView } from './LastTransactions.view';
import { LastTransactionsViewModel } from './LastTransactions.view-model';

export interface LastTransactionsProps {
  title?: string;
  showFilter?: boolean;
  transactions: TTransaction[];
  isLoading: boolean;
  hasError: boolean;
}

type DefaultProps = Pick<LastTransactionsProps, 'title'>;
type Props = LastTransactionsProps & DefaultProps;

const defaultProps: DefaultProps = {
  title: 'Últimas transações',
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
