import { memo } from 'react';
import { RouteProp } from '@react-navigation/native';

import { TransactionsRootParamList } from '../../routes/private/Transactions.routes';
import { TTransaction } from '../../types/Transaction';

import { DetailsTransactionView } from './DetailsTransaction.view';
import { DetailsTransactionViewModel } from './DetailsTransaction.view-model';

type RouteProps = RouteProp<TransactionsRootParamList, 'DetailsTransaction'>;

export interface DetailsTransactionProps {
  route: RouteProps;
}

export interface DetailsTransactionViewProps
  extends Omit<DetailsTransactionProps, 'route'> {}

export type DetailsTransactionParams =
  TransactionsRootParamList['DetailsTransaction'];

function DetailsTransaction(props: DetailsTransactionProps) {
  const { route, ...viewProps } = props;

  const viewModel = useViewModel<DetailsTransactionParams['transaction']>(
    route.params.transaction as DetailsTransactionParams['transaction']
  );

  return <DetailsTransactionView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel<T>(params: T) {
  const viewModel = DetailsTransactionViewModel(params as TTransaction);

  return viewModel;
}

export default memo(DetailsTransaction);
