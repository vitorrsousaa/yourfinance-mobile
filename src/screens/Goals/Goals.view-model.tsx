import { useNavigation } from '@react-navigation/native';

import { PrivateRouteNavigationProp } from '../../routes/private';

export interface GoalsViewModelProps {
  handleNavigateToCreateGoalInformation: () => void;
}

export function GoalsViewModel() {
  const navigation = useNavigation<PrivateRouteNavigationProp>();

  function handleNavigateToCreateGoalInformation() {
    navigation.navigate('GoalsRoutes', {
      screen: 'CreateGoalInformation',
    });
  }

  return {
    handleNavigateToCreateGoalInformation,
  };
}
