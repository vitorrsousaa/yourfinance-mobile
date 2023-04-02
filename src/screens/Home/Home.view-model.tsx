import { useState } from 'react';
import { Transaction } from '../../types/Transaction';
import { CardSummary } from '../../types/Analytics';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface HomeViewModelProps {
  transactions: Transaction[];
  incomeSummary: CardSummary;
  outcomeSummary: CardSummary;
  setTransactions: (transaction: Transaction[]) => void;
  setIncomeSummary: (summary: CardSummary) => void;
  setOutcomeSummary: (summary: CardSummary) => void;
  handleNavigateSettings: () => void;
}

export function HomeViewModel() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [incomeSummary, setIncomeSummary] = useState<CardSummary>();
  const [outcomeSummary, setOutcomeSummary] = useState<CardSummary>();

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
