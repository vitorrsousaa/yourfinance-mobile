import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import useErrors from '../../hooks/useErrors';
import { useCategories } from '../../hooks/useCategories';
import { SelectOptions } from '../../components/Select/Select';
import { useModalities } from '../../hooks/useModalities';

export interface CreateTransactionsViewModelProps {
  amount: number;
  description: string;
  isValid: boolean;
  optionsCategories: SelectOptions[];
  optionsModalities: SelectOptions[];
  selectedCategory: string;
  selectedModality: string;
  isLoadingModalities: boolean;
  isLoadingCategories: boolean;
  goBack: () => void;
  handleAmountChange: (text: string) => void;
  handleDescriptionChange: (text: string) => void;
  handleCategoryChange: (text: string | number) => void;
  handleModalityChange: (text: string | number) => void;
  getErrorMessageByFieldName: (fieldName: string) => string | undefined;
}

export function CreateTransactionsViewModel() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedModality, setSelectedModality] = useState('');

  const { categories, isErrorCategories, isLoadingCategories } =
    useCategories();
  const { modalities, isLoadingModalities, isErrorModalities } =
    useModalities();

  const navigation = useNavigation();

  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useErrors();

  useEffect(() => {
    console.log('dispara um toast falando pra sair do app e tentar novamente');
  }, [isErrorCategories, isErrorModalities]);

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

  function handleCategoryChange(text: number | string) {
    setSelectedCategory(text.toString());
  }

  const optionsCategories = useMemo(() => {
    if (isLoadingCategories) {
      return null;
    }

    const options = categories.map((category) => {
      return {
        label: category.name,
        value: category._id,
      };
    });

    return options;
  }, [isLoadingCategories, categories]);

  function handleModalityChange(text: number | string) {
    setSelectedModality(text.toString());
  }

  const optionsModalities = useMemo(() => {
    if (isLoadingModalities) {
      return null;
    }

    const filtered = modalities.filter(
      (modality) => modality.category === selectedCategory
    );

    const options = filtered.map((category) => {
      return {
        label: category.name,
        value: category._id,
      };
    });

    return options;
  }, [isLoadingModalities, modalities, selectedCategory]);

  return {
    amount,
    description,
    isValid,
    optionsCategories,
    optionsModalities,
    isLoadingModalities,
    isLoadingCategories,
    selectedCategory,
    selectedModality,
    goBack,
    handleAmountChange,
    handleDescriptionChange,
    handleCategoryChange,
    handleModalityChange,
    getErrorMessageByFieldName,
  };
}
