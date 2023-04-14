import { useNavigation } from '@react-navigation/native';
import { PrivateRouteNavigationProp } from '../../../../../../routes/private';
import { TGoalResponse } from '../../../../../../types/Goal';

export interface GoalCardViewModelProps {
  handleNavigateToDetailsGoals: () => void;
}

export function GoalCardViewModel(goal: TGoalResponse) {
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
