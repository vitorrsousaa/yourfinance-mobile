import { useNavigation } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import useErrors from '../../hooks/useErrors';

export interface CreateTransactionsViewModelProps {
  amount: number;
  description: string;
  isValid: boolean;
  goBack: () => void;
  handleAmountChange: (text: string) => void;
  handleDescriptionChange: (text: string) => void;
  getErrorMessageByFieldName: (fieldName: string) => string | undefined;
}

export function CreateTransactionsViewModel() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const navigation = useNavigation();

  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useErrors();

  const isValid = useMemo(() => Boolean(errors.length === 0), [errors]);

  function goBack() {
    navigation.goBack();
  }

  function handleAmountChange(text: string) {
    const numericValue = !text ? 0 : parseFloat(text.replace(/\D/g, '')) / 100;

    if (!isNaN(numericValue)) {
      setAmount(numericValue);
    } else {
      setAmount(0);
    }

    if (numericValue === 0) {
      setError({
        field: 'amount',
        message: 'O valor precisa ser maior do que R$ 0,00',
      });
    } else {
      removeError('amount');
    }
  }

  function handleDescriptionChange(text: string) {
    setDescription(text);

    if (!text) {
      setError({ field: 'description', message: 'Insira um nome para a meta' });
    } else {
      removeError('description');
    }
  }

  return {
    amount,
    description,
    isValid,
    goBack,
    handleAmountChange,
    handleDescriptionChange,
    getErrorMessageByFieldName,
  };
}
