import { useState } from 'react';
import { TGoalResponse, TGoalTransaction } from '../../../../types/Goal';
import GoalsService from '../../../../service/GoalsService';
import { useGoals } from '../../../../hooks/useGoals';
import { useNavigation } from '@react-navigation/native';
import useErrors from '../../../../hooks/useErrors';
import { TModeTransaction } from '../../../../types/Goal/modeTransaction';
import formatAmount from '../../../../utils/formatAmout';

export interface DetailsGoalsViewModelProps {
  removing: boolean;
  modalIncomeVisible: boolean;
  modalOutcomeVisible: boolean;
  modalRemoveVisible: boolean;
  inputIsValid: boolean;
  updatingGoal: boolean;
  amount: number;
  goal: TGoalResponse;
  handleRemoveGoal: () => Promise<void>;
  toggleVisibleModalIncome: () => void;
  toggleVisibleModalOutcome: () => void;
  toggleVisibleModalRemove: () => void;
  handleAmountChange: (text: string, mode: TModeTransaction) => void;
  handleCreateTransactionGoal: (mode: TModeTransaction) => Promise<void>;
  getErrorMessageByFieldName: (fieldName: string) => string | undefined;
}

export function DetailsGoalsViewModel(goalResponse: TGoalResponse) {
  const [goal, setGoal] = useState<TGoalResponse>(goalResponse);
  const [removing, setRemoving] = useState(false);
  const [updatingGoal, setUpdatingGoal] = useState(false);
  const [modalIncomeVisible, setIsModalIncomeVisible] = useState(false);
  const [modalOutcomeVisible, setIsModalOutcomeVisible] = useState(false);
  const [modalRemoveVisible, setIsModalRemoveVisible] = useState(false);
  const [amount, setAmount] = useState(0);

  const { refetch } = useGoals();
  const navigation = useNavigation();
  const { setError, removeError, getErrorMessageByFieldName, errors } =
    useErrors();

  const inputIsValid = Boolean(errors.length > 0 || amount === 0);

  async function handleRemoveGoal() {
    try {
      setRemoving(true);

      await GoalsService.delete(goal._id);

      refetch();
    } catch (error) {
      console.log(error);
      console.log(
        'Adicionar um toast caso tenha um erro para excluir a transação'
      );
    } finally {
      setRemoving(false);

      toggleVisibleModalRemove();

      navigation.goBack();
    }
  }

  function toggleVisibleModalIncome() {
    setIsModalIncomeVisible(!modalIncomeVisible);
    setAmount(0);
    removeError('amount');
  }

  function toggleVisibleModalOutcome() {
    setIsModalOutcomeVisible(!modalOutcomeVisible);
    setAmount(0);
    removeError('amount');
  }

  function toggleVisibleModalRemove() {
    setIsModalRemoveVisible(!modalRemoveVisible);
  }

  function handleAmountChange(text: string, mode: TModeTransaction) {
    const numericValue = !text ? 0 : parseFloat(text.replace(/\D/g, '')) / 100;

    if (!isNaN(numericValue)) {
      setAmount(numericValue);
    } else {
      setAmount(0);
    }

    const { balance, payOff } = goal;

    if (numericValue === 0) {
      setError({
        field: 'amount',
        message: 'O valor precisa ser maior do que R$0,00',
      });
    } else if (mode === 'MORE') {
      if (numericValue > Number(payOff.toFixed(2))) {
        setError({
          field: 'amount',
          message: `Você só pode depositar um valor até ${formatAmount(
            payOff
          )} para atingir sua meta.`,
        });
      } else {
        removeError('amount');
      }
    } else if (mode === 'LESS') {
      if (numericValue > balance) {
        setError({
          field: 'amount',
          message: `Você só pode resgatar um valor até ${formatAmount(
            balance
          )}.`,
        });
      } else {
        removeError('amount');
      }
    } else {
      removeError('amount');
    }
  }

  async function handleCreateTransactionGoal(mode: TModeTransaction) {
    const goalTransaction: TGoalTransaction = {
      balanceValue: amount,
      modeSum: mode,
    };

    setUpdatingGoal(true);

    try {
      const response = await GoalsService.createTransaction(
        goal._id,
        goalTransaction
      );

      setGoal(response);
      refetch();
    } catch (error) {
      console.log(error);
      console.log(
        'Falta adicionar um toast quando der erro para criar uma transação da meta'
      );
    } finally {
      setUpdatingGoal(false);
      mode === 'MORE'
        ? toggleVisibleModalIncome()
        : toggleVisibleModalOutcome();
    }
  }

  return {
    removing,
    modalIncomeVisible,
    modalOutcomeVisible,
    modalRemoveVisible,
    amount,
    inputIsValid,
    updatingGoal,
    goal,
    handleRemoveGoal,
    toggleVisibleModalIncome,
    toggleVisibleModalOutcome,
    toggleVisibleModalRemove,
    handleAmountChange,
    handleCreateTransactionGoal,
    getErrorMessageByFieldName,
  };
}
