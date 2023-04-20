import { useNavigation } from '@react-navigation/native';
import { GoalsRoutesNavigationProp } from '../../../../routes/private/Goal.routes';
import { CreateGoalTimeParams } from './CreateGoalTime';
import { useMemo, useState } from 'react';
import { TGoalCreate } from '../../../../types/Goal';

import { CheckBoxItem } from './components/CheckBoxForm/CheckBoxForm';

export interface CreateGoalTimeViewModelProps {
  checkForm: CheckBoxItem[];
  month: number;
  isValid: boolean;
  goBack: () => void;
  handleChangeMonth: (item: CheckBoxItem) => void;
  handleNavigateToCreateGoalDetails: () => void;
}

export function CreateGoalTimeViewModel(params: CreateGoalTimeParams) {
  const [month, setMonth] = useState(0);
  const navigation = useNavigation<GoalsRoutesNavigationProp>();

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

  const isValid = useMemo(() => {
    if (month === 0) {
      return false;
    } else {
      return true;
    }
  }, [month]);

  function goBack() {
    navigation.goBack();
  }

  function handleChangeMonth(item: CheckBoxItem) {
    setMonth(item.value);
  }

  function handleNavigateToCreateGoalDetails() {
    const now = new Date();
    const nowUtcString = now.toISOString(); // cria uma string UTC no formato ISO 8601
    const nowUtc = new Date(nowUtcString);

    const goal: TGoalCreate = {
      ...params,
      goalTime: {
        initialDate: nowUtcString,
        endDate: new Date(
          nowUtc.getFullYear(),
          nowUtc.getMonth() + month,
          nowUtc.getDate()
        ).toISOString(),
      },
    };

    navigation.navigate('CreateGoalDetails', { goal, month: month });
  }

  return {
    checkForm,
    month,
    isValid,
    handleChangeMonth,
    goBack,
    handleNavigateToCreateGoalDetails,
  };
}
