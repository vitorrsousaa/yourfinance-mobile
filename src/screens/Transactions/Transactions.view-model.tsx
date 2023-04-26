import { useNavigation } from '@react-navigation/native';

import { PrivateRouteNavigationProp } from '../../routes/private';

export interface TransactionsViewModelProps {
  handleNavigateToCreateTransaction: () => void;
}

export function TransactionsViewModel() {
  const transactionsNavigate = useNavigation<PrivateRouteNavigationProp>();

  function handleNavigateToCreateTransaction() {
    transactionsNavigate.navigate('TransactionsRoutes', {
      screen: 'CreateTransactions',
    });
  }

  return {
    handleNavigateToCreateTransaction,
  };
}
