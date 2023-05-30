import { useNavigation } from '@react-navigation/native';

import { PrivateRouteNavigationProp } from '../../routes/private';
import { TTransaction } from '../../types/Transaction';

export interface TransactionsViewModelProps {
  handleNavigateToCreateTransaction: () => void;
  handleNavigateToDetailsTransaction: (transaction: TTransaction) => void;
}

export function TransactionsViewModel() {
  const transactionsNavigate = useNavigation<PrivateRouteNavigationProp>();

  function handleNavigateToCreateTransaction() {
    transactionsNavigate.navigate('TransactionsRoutes', {
      screen: 'CreateTransactions',
    });
  }

  function handleNavigateToDetailsTransaction(transaction: TTransaction) {
    transactionsNavigate.navigate('TransactionsRoutes', {
      screen: 'DetailsTransaction',
      params: { transaction },
    });
  }

  return {
    handleNavigateToCreateTransaction,
    handleNavigateToDetailsTransaction,
  };
}
