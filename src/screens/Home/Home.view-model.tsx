import { useState } from 'react';
import { TCardSummary } from '../../types/Analytics';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PrivateRootParamList } from '../../routes/private';

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
    isLoading,
    hasError,
    setHasError,
    setIsLoading,
    setIncomeSummary,
    setOutcomeSummary,
    handleNavigateSettings,
    handleNavigateNotifications,
  };
}
