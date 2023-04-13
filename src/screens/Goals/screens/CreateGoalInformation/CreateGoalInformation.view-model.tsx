import { useState } from 'react';
import useErrors from '../../../../hooks/useErrors';
import { useNavigation } from '@react-navigation/native';
import { GoalsRoutesNavigationProp } from '../../../../routes/private/Goal.routes';

export interface CreateGoalInformationViewModelProps {
  name: string;
  initialValue: string;
  goalCost: string;
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
  const [goalCost, setGoalCost] = useState('');
  const [initialValue, setInitialValue] = useState('');

  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useErrors();

  const navigation = useNavigation<GoalsRoutesNavigationProp>();

  const isFormValid = name && goalCost && errors.length === 0;

  function handleNameGoalChange(text: string) {
    setName(text);

    if (!text) {
      setError({ field: 'name', message: 'Insira um nome para a meta' });
    } else {
      removeError('name');
    }
  }
  function handleGoalCostChange(text: string) {
    const numericValue = text.replace(/[^0-9]/g, '');
    setGoalCost(numericValue);

    if (!text) {
      setError({ field: 'goalCost', message: 'Insira um nome para a meta' });
    } else {
      removeError('goalCost');
    }
  }

  function handleInitialValueGoalChange(text: string) {
    const numericValue = text.replace(/[^0-9]/g, '');
    setInitialValue(numericValue);
  }

  function handleResetValues() {
    setName('');
    setInitialValue('');
    navigation.goBack();
  }

  function handleNavigateToCreateGoalTime() {
    navigation.navigate('CreateGoalTime', {
      goalName: name,
      goalCost: 100,
      initialValue: 50,
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
