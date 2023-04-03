import { useState } from 'react';
import { TTransaction } from '../../types/Transaction';
import { TCardSummary } from '../../types/Analytics';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootHomeParamList } from '../../routes/private/Stack.routes';

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

  const navigation = useNavigation<NavigationProp<RootHomeParamList>>();

  function handleNavigateSettings() {
    navigation.navigate('Settings', undefined);
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
