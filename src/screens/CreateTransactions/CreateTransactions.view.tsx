import { CreateTransactionsViewModelProps } from './CreateTransactions.view-model';
import { CreateTransactionsViewProps } from './CreateTransactions';
import * as styled from './CreateTransactions.styles';
import { View } from 'react-native';
import Header from '../../components/Header';
import InputOutlined from '../../components/InputOutlined';
import formatAmount from '../../utils/formatAmout';
import Select from '../../components/Select';
import { isLoading } from 'expo-font';

interface Props {
  viewModel: CreateTransactionsViewModelProps;
  props: CreateTransactionsViewProps;
}

export function CreateTransactionsView({ viewModel, props }: Props) {
  const { ...createTransactionsProps } = props;

  const {
    amount,
    description,
    selectedCategory,
    optionsModalities,
    selectedModality,
    optionsCategories,
    isLoadingModalities,
    isLoadingCategories,
    handleCategoryChange,
    handleModalityChange,
    goBack,
    handleAmountChange,
    handleDescriptionChange,
    getErrorMessageByFieldName,
  } = viewModel;

  return (
    <styled.CreateTransactions>
      <Header title="Adicione uma transação" onPressLeftIcon={goBack} />

      <styled.Container>
        <InputOutlined
          placeholder="Digite uma descrição da sua transação"
          value={description}
          onChangeText={handleDescriptionChange}
          error={getErrorMessageByFieldName('description')}
        />

        <Select
          placeholder="Selecione a categoria"
          selectedValue={selectedCategory}
          data={optionsCategories}
          onValueChange={(itemValue) => handleCategoryChange(itemValue)}
          isLoading={isLoadingCategories}
        />

        <Select
          placeholder="Selecione a modalidade"
          selectedValue={selectedModality}
          data={optionsModalities}
          onValueChange={(itemValue) => handleModalityChange(itemValue)}
          isLoading={isLoadingModalities}
          disabled={selectedCategory.length > 0 ? false : true}
        />

        <InputOutlined
          placeholder="Digiteo valor da sua transação"
          value={formatAmount(amount)}
          onChangeText={handleAmountChange}
          error={getErrorMessageByFieldName('amount')}
        />
      </styled.Container>
    </styled.CreateTransactions>
  );
}
