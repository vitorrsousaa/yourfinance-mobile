import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useCategories } from '../../hooks/useCategories';
import { PrivateRouteNavigationProp } from '../../routes/private';
import AnalyticsService from '../../service/AnalyticsService';
import { TCardSummary } from '../../types/Analytics';
import formatAmount from '../../utils/formatAmout';

export interface HomeViewModelProps {
  isLoading: boolean;
  hasError: boolean;
  summaries: TCardSummary[];
  setHasError: (state: boolean) => void;
  setIsLoading: (state: boolean) => void;
  handleNavigateSettings: () => void;
  handleNavigateNotifications: () => void;
  handleNavigateCreateTransaction: () => void;
  loadSummary: () => Promise<void>;
  getDifference: () => string;
}

export function HomeViewModel() {
  const [summaries, setSummaries] = useState<TCardSummary[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const navigation = useNavigation<PrivateRouteNavigationProp>();

  const { categories } = useCategories();

  function handleNavigateSettings() {
    navigation.navigate('User', { screen: 'Settings' });
  }

  function handleNavigateNotifications() {
    navigation.navigate('User', { screen: 'Notification' });
  }

  function handleNavigateCreateTransaction() {
    navigation.navigate('TransactionsRoutes', { screen: 'CreateTransactions' });
  }

  async function loadSummary() {
    try {
      setIsLoading(true);
      const [income, outcome] = await Promise.all([
        AnalyticsService.getCardsSummary(categories[0].id),
        AnalyticsService.getCardsSummary(categories[1].id),
      ]);

      const data = [income, outcome];

      setSummaries(data);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function getDifference() {
    if (isLoading) {
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
    isLoading,
    hasError,
    summaries,
    setHasError,
    setIsLoading,
    handleNavigateSettings,
    handleNavigateNotifications,
    handleNavigateCreateTransaction,
    loadSummary,
    getDifference,
  };
}
