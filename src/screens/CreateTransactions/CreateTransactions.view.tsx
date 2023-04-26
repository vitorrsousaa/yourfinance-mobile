import { CreateTransactionsViewModelProps } from './CreateTransactions.view-model';
import { CreateTransactionsViewProps } from './CreateTransactions';
import * as styled from './CreateTransactions.styles';
import { View } from 'react-native';
import Header from '../../components/Header';
import InputOutlined from '../../components/InputOutlined';
import formatAmount from '../../utils/formatAmout';

interface Props {
  viewModel: CreateTransactionsViewModelProps;
  props: CreateTransactionsViewProps;
}

export function CreateTransactionsView({ viewModel, props }: Props) {
  const { ...createTransactionsProps } = props;

  const {
    amount,
    description,
    goBack,
    handleAmountChange,
    handleDescriptionChange,
    getErrorMessageByFieldName,
  } = viewModel;

  return (
    <styled.CreateTransactions>
      <Header title="Adicionando uma transação" onPressLeftIcon={goBack} />

      <styled.Container>
        <InputOutlined
          placeholder="Digite uma descrição da sua transação"
          value={description}
          onChangeText={handleDescriptionChange}
          error={getErrorMessageByFieldName('description')}
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
