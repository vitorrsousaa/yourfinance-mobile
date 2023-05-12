import { useNavigation } from '@react-navigation/native';

import { PrivateRouteNavigationProp } from '../../../../../../routes/private';
import { TGoal } from '../../../../../../types/Goal';

export interface GoalCardViewModelProps {
  handleNavigateToDetailsGoals: () => void;
}

export function GoalCardViewModel(goal: TGoal) {
  const navigation = useNavigation<PrivateRouteNavigationProp>();

  function handleNavigateToDetailsGoals() {
    navigation.navigate('GoalsRoutes', {
      screen: 'DetailsGoals',
      params: { goal },
    });
  }

  return {
    handleNavigateToDetailsGoals,
  };
}
