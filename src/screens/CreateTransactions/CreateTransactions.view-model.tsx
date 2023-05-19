import { useEffect, useMemo, useState } from 'react';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

import { useCategories } from '../../hooks/useCategories';
import { useModalities } from '../../hooks/useModalities';
import { useTransactions } from '../../hooks/useTransactions';
import TransactionsService from '../../service/TransactionsService';
import { TCategory } from '../../types/Category';
import { TModality } from '../../types/Modality';
import { TTransactionCreate } from '../../types/Transaction';
import { isAndroid } from '../../utils/isAndroid';

export interface CreateTransactionsViewModelProps {
  amount: number;
  description: string;
  isValid: boolean;
  category: TCategory;
  selectedCategory: boolean;
  modalityModalIsVisible: boolean;
  isLoadingModalities: boolean;
  selectedModality: TModality | null;
  transactionRepeatModalIsVisible: boolean;
  transactionRepeat: boolean;
  monthsThatRepeatTransaction: number;
  datePickerIsVisible: boolean;
  date: Date;
  isSubmitting: boolean;
  getModalities: () => TModality[] | undefined;
  goBack: () => void;
  handleAmountChange: (text: string) => void;
  handleDescriptionChange: (text: string) => void;
  handleCategoryChange: () => void;
  toggleModalityModal: () => void;
  onSelectedModality: (modality: TModality) => void;
  toggleTransactionRepeatModal: () => void;
  handleClickOnToggleMovFixed: () => void;
  handleClickOnRowMovFixed: () => void;
  handlePlusMonthRepeatTransaction: () => void;
  handleMinusMonthRepeatTransaction: () => void;
  toggleDatePicker: () => void;
  handleChangeDate: (
    event: DateTimePickerEvent,
    date: Date | undefined
  ) => void;
  handleSubmit: () => void;
}

export function CreateTransactionsViewModel(): CreateTransactionsViewModelProps {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(true);
  const [selectedModality, setSelectedModality] = useState<TModality | null>(
    null
  );
  const [modalityModalIsVisible, setModalityModalIsVisible] = useState(false);
  const [transactionRepeat, setTransactionRepeat] = useState(false);
  const [transactionRepeatModalIsVisible, setTransactionRepeatModalIsVisible] =
    useState(false);
  const [monthsThatRepeatTransaction, setMonthsThatRepeatTransaction] =
    useState(1);
  const [datePickerIsVisible, setDatePickerIsVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { categories, isErrorCategories } = useCategories();

  const { modalities, isErrorModalities, isLoadingModalities } =
    useModalities();

  const { refetch } = useTransactions();

  const navigation = useNavigation();

  useEffect(() => {
    if (isErrorCategories || isErrorModalities) {
      console.log(
        'dispara um toast falando pra sair do app e tentar novamente'
      );
      return;
    }
  }, [isErrorCategories, isErrorModalities]);

  useEffect(() => {
    setSelectedModality(null);
  }, [selectedCategory]);

  const isValid = useMemo(
    () =>
      Boolean(
        description.length > 0 && amount > 0 && selectedModality !== null
      ),
    [description, amount, selectedModality]
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

  function toggleTransactionRepeatModal() {
    setTransactionRepeatModalIsVisible(!transactionRepeatModalIsVisible);
  }

  function toggleTransactionRepeat() {
    setTransactionRepeat(!transactionRepeat);
  }

  function handleClickOnToggleMovFixed() {
    const valueTransactionRepeat = !transactionRepeat;
    toggleTransactionRepeat();

    if (valueTransactionRepeat) {
      toggleTransactionRepeatModal();
      return;
    }
  }

  function handleClickOnRowMovFixed() {
    if (!transactionRepeat) {
      toggleTransactionRepeat();
    }

    toggleTransactionRepeatModal();
  }

  function handlePlusMonthRepeatTransaction() {
    if (monthsThatRepeatTransaction < 12) {
      setMonthsThatRepeatTransaction((prevState) => prevState + 1);
    }
  }

  function handleMinusMonthRepeatTransaction() {
    if (monthsThatRepeatTransaction > 1) {
      setMonthsThatRepeatTransaction((prevState) => prevState - 1);
    }
  }

  function toggleDatePicker() {
    setDatePickerIsVisible(!datePickerIsVisible);
  }

  function handleChangeDate(
    event: DateTimePickerEvent,
    date: Date | undefined
  ) {
    if (event.type == 'set') {
      const currentDate = date;
      setDate(currentDate!);

      if (isAndroid) {
        toggleDatePicker();
      }
    } else {
      toggleDatePicker();
    }
  }

  async function handleSubmit() {
    setIsSubmitting(true);

    const transactionCreate: TTransactionCreate = {
      modality: selectedModality ? selectedModality.id : '',
      description: description,
      amount: amount,
      category: category.id,
      date: date,
    };

    const data = {
      time: monthsThatRepeatTransaction,
      initialDate: date,
      infosTransactionFixed: transactionCreate,
    };

    try {
      const response = await TransactionsService.create(transactionCreate);

      await refetch();

      console.log(response);
    } catch (error) {
      console.log(error);
      console.log(
        'TEve um erro para cadastrar sua transação - Create transactions'
      );
    } finally {
      // goBack();
      setIsSubmitting(false);
    }

    // console.log(transaction);
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
    transactionRepeatModalIsVisible,
    transactionRepeat,
    monthsThatRepeatTransaction,
    datePickerIsVisible,
    date,
    isSubmitting,
    getModalities,
    goBack,
    handleAmountChange,
    handleDescriptionChange,
    handleCategoryChange,
    toggleModalityModal,
    onSelectedModality,
    toggleTransactionRepeatModal,
    handleClickOnToggleMovFixed,
    handleClickOnRowMovFixed,
    handlePlusMonthRepeatTransaction,
    handleMinusMonthRepeatTransaction,
    toggleDatePicker,
    handleChangeDate,
    handleSubmit,
  };
}
