import { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import useCardSummaries from '../../hooks/entities/useCardSummaries';
import { PrivateRouteNavigationProp } from '../../routes/private';
import { FEEDBACK_COLLECTION } from '../../storage/storageConfig';
import { TCardSummary } from '../../types/Analytics';
import formatAmount from '../../utils/formatAmout';

export interface HomeViewModelProps {
  isLoading: boolean;
  hasError: boolean;
  summaries: TCardSummary[];
  hasFeedback: boolean;
  handleNavigateSettings: () => void;
  handleNavigateNotifications: () => void;
  getDifference: () => string;
  loadFeedback: () => Promise<void>;
}

export function HomeViewModel() {
  const [hasFeedback, setHasFeedback] = useState(false);
  const navigation = useNavigation<PrivateRouteNavigationProp>();

  const loadFeedback = useCallback(async () => {
    const feedback = await AsyncStorage.getItem(FEEDBACK_COLLECTION);

    if (feedback) {
      setHasFeedback(true);
    }
  }, []);

  const { isErrorSummaries, isLoadingSummaries, summaries } =
    useCardSummaries();

  function handleNavigateSettings() {
    return navigation.navigate('User', { screen: 'Settings' });
  }

  function handleNavigateNotifications() {
    return navigation.navigate('User', { screen: 'Notification' });
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
    hasFeedback,
    handleNavigateSettings,
    handleNavigateNotifications,
    getDifference,
    loadFeedback,
  };
}
