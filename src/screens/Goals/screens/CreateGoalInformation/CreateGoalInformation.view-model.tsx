import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import useErrors from '../../../../hooks/useErrors';
import { GoalsRoutesNavigationProp } from '../../../../routes/private/Goal.routes';

export interface CreateGoalInformationViewModelProps {
  name: string;
  initialValue: number;
  goalCost: number;
  isFormValid: boolean;
  getErrorMessageByFieldName: (fieldName: string) => string | undefined;
  handleNameGoalChange: (text: string) => void;
  handleInitialValueGoalChange: (text: string) => void;
  handleGoalCostChange: (text: string) => void;
  handleNavigateToCreateGoalTime: () => void;
  goBack: () => void;
}

export function CreateGoalInformationViewModel() {
  const [name, setName] = useState('');
  const [goalCost, setGoalCost] = useState(0);
  const [initialValue, setInitialValue] = useState(0);

  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useErrors();

  const navigation = useNavigation<GoalsRoutesNavigationProp>();

  const isFormValid = Boolean(name && goalCost && errors.length === 0);
  7;

  useEffect(() => {
    if (initialValue > goalCost) {
      setError({
        field: 'initialValue',
        message: 'Você não pode armazenar um valor maior do que a meta.',
      });
    } else {
      removeError('initialValue');
    }
  }, [goalCost, initialValue]);

  function handleNameGoalChange(text: string) {
    setName(text);

    if (!text) {
      setError({ field: 'name', message: 'Insira um nome para a meta' });
    } else {
      removeError('name');
    }
  }

  function handleGoalCostChange(text: string) {
    const numericValue = !text ? 0 : parseFloat(text.replace(/\D/g, '')) / 100;

    if (!isNaN(numericValue)) {
      setGoalCost(numericValue);
    } else {
      setGoalCost(0);
    }

    if (numericValue === 0) {
      setError({
        field: 'goalCost',
        message: 'O valor precisa ser maior do que R$ 0,00',
      });
    } else {
      removeError('goalCost');
    }
  }

  function handleInitialValueGoalChange(text: string) {
    const numericValue = !text ? 0 : parseFloat(text.replace(/\D/g, '')) / 100;

    if (!isNaN(numericValue)) {
      setInitialValue(numericValue);
    } else {
      setInitialValue(0);
    }

    if (numericValue > goalCost) {
      setError({
        field: 'initialValue',
        message:
          'Você não pode armazenar um valor initial maior do que a meta.',
      });
    } else {
      removeError('initialValue');
    }
  }

  function handleResetValues() {
    setName('');
    setInitialValue(0);
    navigation.goBack();
  }

  function handleNavigateToCreateGoalTime() {
    navigation.navigate('CreateGoalTime', {
      goalName: name,
      goalCost,
      initialValue,
    });
  }

  function goBack() {
    navigation.goBack();
  }

  return {
    name,
    isFormValid,
    initialValue,
    goalCost,
    getErrorMessageByFieldName,
    handleNameGoalChange,
    handleInitialValueGoalChange,
    handleNavigateToCreateGoalTime,
    handleGoalCostChange,
    goBack,
  };
}
