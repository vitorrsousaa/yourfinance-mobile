import { useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useCategories } from '../../hooks/useCategories';
import { useModalities } from '../../hooks/useModalities';
import { TCategory } from '../../types/Category';
import { TModality } from '../../types/Modality';

export interface CreateTransactionsViewModelProps {
  amount: number;
  description: string;
  isValid: boolean;
  category: TCategory;
  selectedCategory: boolean;
  modalityModalIsVisible: boolean;
  isLoadingModalities: boolean;
  selectedModality: TModality | null;
  getModalities: () => TModality[] | undefined;
  goBack: () => void;
  handleAmountChange: (text: string) => void;
  handleDescriptionChange: (text: string) => void;
  handleCategoryChange: () => void;
  toggleModalityModal: () => void;
  onSelectedModality: (modality: TModality) => void;
}

export function CreateTransactionsViewModel(): CreateTransactionsViewModelProps {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(true);
  const [selectedModality, setSelectedModality] = useState<TModality | null>(
    null
  );
  const [modalityModalIsVisible, setModalityModalIsVisible] = useState(false);

  const { categories, isErrorCategories } = useCategories();

  const { modalities, isErrorModalities, isLoadingModalities } =
    useModalities();

  const navigation = useNavigation();

  useEffect(() => {
    if (isErrorCategories || isErrorModalities) {
      console.log(
        'dispara um toast falando pra sair do app e tentar novamente'
      );
      return;
    }
  }, [isErrorCategories, isErrorModalities]);

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

  function getModalities() {
    if (modalities) {
      const modalitiesFiltered = modalities.filter(
        (modality) => modality.category === category.id
      );

      return modalitiesFiltered;
    }
  }

  function toggleModalityModal() {
    setModalityModalIsVisible(!modalityModalIsVisible);
  }

  function onSelectedModality(modality: TModality) {
    setSelectedModality(modality);

    toggleModalityModal();
  }

  return {
    amount,
    description,
    isValid,
    category,
    selectedCategory,
    modalityModalIsVisible,
    selectedModality,
    isLoadingModalities,
    getModalities,
    goBack,
    handleAmountChange,
    handleDescriptionChange,
    handleCategoryChange,
    toggleModalityModal,
    onSelectedModality,
  };
}
