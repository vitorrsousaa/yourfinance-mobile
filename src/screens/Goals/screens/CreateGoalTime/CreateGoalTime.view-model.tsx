import { useNavigation } from '@react-navigation/native';
import { GoalsRoutesNavigationProp } from '../../../../routes/private/Goal.routes';
import { CreateGoalTimeParams } from './CreateGoalTime';
import { useState } from 'react';
import { TGoalCreate } from '../../../../types/Goal';
import GoalsService from '../../../../service/GoalsService';
import { PrivateRouteNavigationProp } from '../../../../routes/private';
import { useGoals } from '../../../../hooks/useGoals';
import { CheckBoxItem } from './components/CheckBoxForm/CheckBoxForm';

export interface CreateGoalTimeViewModelProps {
  checkForm: CheckBoxItem[];
  month: number;
  goBack: () => void;
  handleCreateGoal: () => Promise<void>;
  handleChangeMonth: (item: CheckBoxItem) => void;
}

export function CreateGoalTimeViewModel(params: CreateGoalTimeParams) {
  const [month, setMonth] = useState(0);
  const navigation = useNavigation<GoalsRoutesNavigationProp>();
  const navigationStack = useNavigation<PrivateRouteNavigationProp>();
  const { refetch } = useGoals();

  const checkForm: CheckBoxItem[] = [
    {
      label: 'Em 3 meses',
      value: 3,
    },
    {
      label: 'Em 6 meses',
      value: 6,
    },
    {
      label: 'Em 12 meses',
      value: 12,
    },
    {
      label: 'Em 18 meses',
      value: 18,
    },
  ];

  async function handleCreateGoal() {
    const now = new Date();

    const goalCreate: TGoalCreate = {
      ...params,
      goalTime: {
        initialDate: now,
        endDate: new Date(
          now.getFullYear(),
          now.getMonth() + month,
          now.getDate()
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

  function handleChangeMonth(item: CheckBoxItem) {
    setMonth(item.value);
  }

  return {
    checkForm,
    month,
    handleChangeMonth,
    goBack,
    handleCreateGoal,
  };
}
