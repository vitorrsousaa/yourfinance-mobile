import { useNavigation } from '@react-navigation/native';
import { GoalsRoutesNavigationProp } from '../../../../routes/private/Goal.routes';
import { CreateGoalTimeParams } from './CreateGoalTime';
import { useState } from 'react';
import { TGoalCreate } from '../../../../types/Goal';
import GoalsService from '../../../../service/GoalsService';
import { PrivateRouteNavigationProp } from '../../../../routes/private';
import { useGoals } from '../../../../hooks/useGoals';

export interface CreateGoalTimeViewModelProps {
  goBack: () => void;
  handleCreateGoal: () => Promise<void>;
}

export function CreateGoalTimeViewModel(params: CreateGoalTimeParams) {
  const [month, setMonth] = useState(3);
  const navigation = useNavigation<GoalsRoutesNavigationProp>();
  const navigationStack = useNavigation<PrivateRouteNavigationProp>();
  const { refetch } = useGoals();

  async function handleCreateGoal() {
    const now = new Date();

    const goalCreate: TGoalCreate = {
      ...params,
      goalTime: {
        initialDate: now,
        endDate: new Date(
          now.getFullYear(),
          now.getMonth() + month,
          now.getDay()
        ),
      },
    };

    try {
      await GoalsService.create(goalCreate);

      refetch();
    } catch (error) {
      console.log(error);
    } finally {
      navigationStack.navigate('HomeTabs', undefined);
    }
  }

  function goBack() {
    navigation.goBack();
  }

  return {
    goBack,
    handleCreateGoal,
  };
}
