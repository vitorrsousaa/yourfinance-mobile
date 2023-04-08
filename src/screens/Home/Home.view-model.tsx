import { useState } from 'react';
import { TCardSummary } from '../../types/Analytics';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PrivateRootParamList } from '../../routes/private';

export interface HomeViewModelProps {
  incomeSummary: TCardSummary;
  outcomeSummary: TCardSummary;
  setIncomeSummary: (summary: TCardSummary) => void;
  setOutcomeSummary: (summary: TCardSummary) => void;
  handleNavigateSettings: () => void;
  handleNavigateNotifications: () => void;
}

export function HomeViewModel() {
  const [incomeSummary, setIncomeSummary] = useState<TCardSummary>(
    {} as TCardSummary
  );
  const [outcomeSummary, setOutcomeSummary] = useState<TCardSummary>(
    {} as TCardSummary
  );

  const navigation = useNavigation<NavigationProp<PrivateRootParamList>>();

  function handleNavigateSettings() {
    navigation.navigate('Settings', undefined);
  }

  function handleNavigateNotifications() {
    navigation.navigate('Notifications', undefined);
  }

  return {
    incomeSummary,
    outcomeSummary,
    setIncomeSummary,
    setOutcomeSummary,
    handleNavigateSettings,
    handleNavigateNotifications,
  };
}
