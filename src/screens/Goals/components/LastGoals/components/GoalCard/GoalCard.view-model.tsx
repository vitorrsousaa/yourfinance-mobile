import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PrivateRootParamList } from '../../../../../../routes/private';

export interface GoalCardViewModelProps {
  handleNavigateToDetailsGoals: () => void;
}

export function GoalCardViewModel() {
  const navigation = useNavigation<NavigationProp<PrivateRootParamList>>();

  function handleNavigateToDetailsGoals() {
    navigation.navigate('DetailsGoals', undefined);
  }

  return {
    handleNavigateToDetailsGoals,
  };
}
