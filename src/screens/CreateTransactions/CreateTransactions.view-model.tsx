import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import { useCategories } from '../../hooks/useCategories';
import { TCategory } from '../../types/Category';

export interface CreateTransactionsViewModelProps {
  amount: number;
  description: string;
  isValid: boolean;
  category: TCategory;
  selectedCategory: boolean;
  goBack: () => void;
  handleAmountChange: (text: string) => void;
  handleDescriptionChange: (text: string) => void;
  handleCategoryChange: () => void;
}

export function CreateTransactionsViewModel(): CreateTransactionsViewModelProps {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(true);

  const { categories, isErrorCategories, isLoadingCategories } =
    useCategories();

  const navigation = useNavigation();

  useEffect(() => {
    console.log('dispara um toast falando pra sair do app e tentar novamente');
  }, [isErrorCategories]);

  const isValid = useMemo(
    () => Boolean(description.length > 0 && amount > 0),
    [description, amount]
  );

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
  }

  function handleDescriptionChange(text: string) {
    setDescription(text);
  }

  function handleCategoryChange() {
    setSelectedCategory(!selectedCategory);
  }

  const category: TCategory = useMemo(() => {
    if (selectedCategory) {
      return categories[0];
    }

    return categories[1];
  }, [selectedCategory]);

  return {
    amount,
    description,
    isValid,
    category,
    selectedCategory,
    goBack,
    handleAmountChange,
    handleDescriptionChange,
    handleCategoryChange,
  };
}
