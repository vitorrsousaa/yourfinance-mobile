import { useNavigation } from '@react-navigation/native';
import { PrivateRouteNavigationProp } from '../../../../../../routes/private';
import { TGoalResponse } from '../../../../../../types/Goal';

export interface GoalCardViewModelProps {
  handleNavigateToDetailsGoals: (goal: TGoalResponse) => void;
}

export function GoalCardViewModel() {
  const navigation = useNavigation<PrivateRouteNavigationProp>();

  function handleNavigateToDetailsGoals(goal: TGoalResponse) {
    navigation.navigate('GoalsRoutes', {
      screen: 'DetailsGoals',
      params: { goal },
    });
  }

  return {
    handleNavigateToDetailsGoals,
  };
}
