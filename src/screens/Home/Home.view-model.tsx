import { useNavigation } from '@react-navigation/native';

import { PrivateRouteNavigationProp } from '../../routes/private';
import { TCardSummary } from '../../types/Analytics';
import formatAmount from '../../utils/formatAmout';

import useCardSummaries from './hooks/useCardSummaries';

export interface HomeViewModelProps {
  isLoading: boolean;
  hasError: boolean;
  summaries: TCardSummary[];
  handleNavigateSettings: () => void;
  handleNavigateNotifications: () => void;
  handleNavigateCreateTransaction: () => void;
  getDifference: () => string;
}

export function HomeViewModel() {
  const navigation = useNavigation<PrivateRouteNavigationProp>();

  const { isErrorSummaries, isLoadingSummaries, summaries } =
    useCardSummaries();

  function handleNavigateSettings() {
    navigation.navigate('User', { screen: 'Settings' });
  }

  function handleNavigateNotifications() {
    navigation.navigate('User', { screen: 'Notification' });
  }

  function handleNavigateCreateTransaction() {
    navigation.navigate('TransactionsRoutes', { screen: 'CreateTransactions' });
  }

  function getDifference() {
    if (isLoadingSummaries || isErrorSummaries) {
      return '-';
    }

    const income = summaries.find((summary) => summary.category === 'Receitas');

    const outcome = summaries.find(
      (summary) => summary.category === 'Despesas'
    );

    if (income && outcome) {
      const difference = income.currentMonth - outcome.currentMonth;
      return formatAmount(difference);
    } else {
      return '-';
    }
  }

  return {
    isLoading: isLoadingSummaries,
    hasError: isErrorSummaries,
    summaries,
    handleNavigateSettings,
    handleNavigateNotifications,
    handleNavigateCreateTransaction,
    getDifference,
  };
}
