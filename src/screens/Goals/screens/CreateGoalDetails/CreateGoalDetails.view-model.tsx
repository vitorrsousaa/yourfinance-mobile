import GoalsService from '../../../../service/GoalsService';
import { useGoals } from '../../../../hooks/useGoals';
import { useNavigation } from '@react-navigation/native';
import { PrivateRouteNavigationProp } from '../../../../routes/private';
import { GoalsRoutesNavigationProp } from '../../../../routes/private/Goal.routes';
import { CreateGoalDetailsParams } from './CreateGoalDetails';
import { TGoalCreate } from '../../../../types/Goal';
import { useState } from 'react';

export interface CreateGoalDetailsViewModelProps {
  goal: TGoalCreate;
  month: number;
  isSubmitting: boolean;
  handleCreateGoal: () => Promise<void>;
  goBack: () => void;
}

export function CreateGoalDetailsViewModel(params: CreateGoalDetailsParams) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { refetch } = useGoals();
  const { goal, month } = params;

  const navigation = useNavigation<GoalsRoutesNavigationProp>();
  const navigationStackGoal = useNavigation<PrivateRouteNavigationProp>();

  async function handleCreateGoal() {
    const { goalCost, ...rest } = goal;
    const goalCreate = { goalCost: goalCost * month, ...rest };
    try {
      setIsSubmitting(true);
      await GoalsService.create(goalCreate);

      refetch();
    } catch (error) {
      console.log(
        'Adicionar um toast de error quando não conseguir criar a meta'
      );
      console.log(error);
    } finally {
      navigationStackGoal.navigate('HomeTabs', undefined);
      setIsSubmitting(false);
    }
  }

  function goBack() {
    navigation.goBack();
  }

  return {
    goal,
    month,
    isSubmitting,
    handleCreateGoal,
    goBack,
  };
}
