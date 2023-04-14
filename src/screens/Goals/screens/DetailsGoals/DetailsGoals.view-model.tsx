import { useState } from 'react';
import { TGoalResponse } from '../../../../types/Goal';
import GoalsService from '../../../../service/GoalsService';
import { useGoals } from '../../../../hooks/useGoals';
import { useNavigation } from '@react-navigation/native';

export interface DetailsGoalsViewModelProps {
  loading: boolean;
  modalIncomeVisible: boolean;
  modalOutcomeVisible: boolean;
  modalRemoveVisible: boolean;
  handleRemoveGoal: () => Promise<void>;
  handleVisibleModalIncome: () => void;
  handleVisibleModalOutcome: () => void;
  handleVisibleModalRemove: () => void;
}

export function DetailsGoalsViewModel(goal: TGoalResponse) {
  const [loading, setIsLoading] = useState(false);
  const [modalIncomeVisible, setIsModalIncomeVisible] = useState(false);
  const [modalOutcomeVisible, setIsModalOutcomeVisible] = useState(false);
  const [modalRemoveVisible, setIsModalRemoveVisible] = useState(false);

  const { refetch } = useGoals();
  const navigation = useNavigation();

  async function handleRemoveGoal() {
    try {
      setIsLoading(true);
      await GoalsService.delete(goal._id);
      refetch();
      navigation.goBack();
    } catch (error) {
      console.log(error);
      console.log(
        'Adicionar um toast caso tenha um erro para excluir a transação'
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleVisibleModalIncome() {
    setIsModalIncomeVisible(!modalIncomeVisible);
  }
  function handleVisibleModalOutcome() {
    setIsModalOutcomeVisible(!modalOutcomeVisible);
  }
  function handleVisibleModalRemove() {
    setIsModalRemoveVisible(!modalRemoveVisible);
  }

  return {
    loading,
    modalIncomeVisible,
    modalOutcomeVisible,
    modalRemoveVisible,
    handleRemoveGoal,
    handleVisibleModalIncome,
    handleVisibleModalOutcome,
    handleVisibleModalRemove,
  };
}
