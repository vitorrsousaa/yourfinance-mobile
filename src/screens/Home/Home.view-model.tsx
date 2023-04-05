import { useState } from 'react';
import { TTransaction } from '../../types/Transaction';
import { TCardSummary } from '../../types/Analytics';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootHomeParamList } from './Home.routes';
import { useTransactions } from '../../hooks/useTransactions';

export interface HomeViewModelProps {
  transactions: TTransaction[];
  incomeSummary: TCardSummary;
  outcomeSummary: TCardSummary;
  errorTransactions: boolean;
  loadingTransactions: boolean;
  setIncomeSummary: (summary: TCardSummary) => void;
  setOutcomeSummary: (summary: TCardSummary) => void;
  handleNavigateSettings: () => void;
  handleNavigateNotifications: () => void;
}

export function HomeViewModel() {
  const { errorTransactions, loadingTransactions, transactions } =
    useTransactions();
  const [incomeSummary, setIncomeSummary] = useState<TCardSummary>(
    {} as TCardSummary
  );
  const [outcomeSummary, setOutcomeSummary] = useState<TCardSummary>(
    {} as TCardSummary
  );

  const navigation = useNavigation<NavigationProp<RootHomeParamList>>();

  function handleNavigateSettings() {
    navigation.navigate('Settings', undefined);
  }

  function handleNavigateNotifications() {
    navigation.navigate('Notifications', { tabBarVisible: false });
  }

  return {
    transactions,
    incomeSummary,
    outcomeSummary,
    errorTransactions,
    loadingTransactions,
    setIncomeSummary,
    setOutcomeSummary,
    handleNavigateSettings,
    handleNavigateNotifications,
  };
}
