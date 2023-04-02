import { useState } from 'react';
import { TTransaction } from '../../types/Transaction';
import { TCardSummary } from '../../types/Analytics';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface HomeViewModelProps {
  transactions: TTransaction[];
  incomeSummary: TCardSummary;
  outcomeSummary: TCardSummary;
  setTransactions: (transaction: TTransaction[]) => void;
  setIncomeSummary: (summary: TCardSummary) => void;
  setOutcomeSummary: (summary: TCardSummary) => void;
  handleNavigateSettings: () => void;
}

export function HomeViewModel() {
  const [transactions, setTransactions] = useState<TTransaction[]>([]);
  const [incomeSummary, setIncomeSummary] = useState<TCardSummary>();
  const [outcomeSummary, setOutcomeSummary] = useState<TCardSummary>();

  const navigation = useNavigation();

  function handleNavigateSettings() {
    navigation.navigate<RootStackParamList>('Settings');
  }

  return {
    transactions,
    incomeSummary,
    outcomeSummary,
    setTransactions,
    setIncomeSummary,
    setOutcomeSummary,
    handleNavigateSettings,
  };
}
