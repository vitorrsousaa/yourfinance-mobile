import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { PrivateRouteNavigationProp } from '../../routes/private';
import { TCardSummary } from '../../types/Analytics';

export interface HomeViewModelProps {
  incomeSummary: TCardSummary;
  outcomeSummary: TCardSummary;
  isLoading: boolean;
  hasError: boolean;
  setHasError: (state: boolean) => void;
  setIsLoading: (state: boolean) => void;
  setIncomeSummary: (summary: TCardSummary) => void;
  setOutcomeSummary: (summary: TCardSummary) => void;
  handleNavigateSettings: () => void;
  handleNavigateNotifications: () => void;
  handleNavigateCreateTransaction: () => void;
}

export function HomeViewModel() {
  const [incomeSummary, setIncomeSummary] = useState<TCardSummary>(
    {} as TCardSummary
  );
  const [outcomeSummary, setOutcomeSummary] = useState<TCardSummary>(
    {} as TCardSummary
  );

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const navigation = useNavigation<PrivateRouteNavigationProp>();

  function handleNavigateSettings() {
    navigation.navigate('User', { screen: 'Settings' });
  }

  function handleNavigateNotifications() {
    navigation.navigate('User', { screen: 'Notification' });
  }

  function handleNavigateCreateTransaction() {
    navigation.navigate('TransactionsRoutes', { screen: 'CreateTransactions' });
  }

  return {
    incomeSummary,
    outcomeSummary,
    isLoading,
    hasError,
    setHasError,
    setIsLoading,
    setIncomeSummary,
    setOutcomeSummary,
    handleNavigateSettings,
    handleNavigateNotifications,
    handleNavigateCreateTransaction,
  };
}
