import { CreateTransactionsViewModelProps } from './CreateTransactions.view-model';
import { CreateTransactionsViewProps } from './CreateTransactions';
import * as styled from './CreateTransactions.styles';
import { View } from 'react-native';
import Header from '../../components/Header';
import InputOutlined from '../../components/InputOutlined';
import formatAmount from '../../utils/formatAmout';
import { Text } from '../../components/Text';
import { useTheme } from 'styled-components/native';
import Row from './components/Row';
import Icon from '../../components/Icons';

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

  const { colors } = useTheme();

  return (
    <styled.CreateTransactions>
      <Header title="Adicione uma transação" onPressLeftIcon={goBack} />

      <styled.Container>
        <Row
          icon={<Icon name="certificate" />}
          title="Receitas"
          rightIcon={<Text>toggle</Text>}
        />

        <Row icon={<Icon name="pencil" />}>
          <InputOutlined
            border={false}
            fixedHeight={false}
            placeholder="Digite uma descrição da sua transação"
            value={description}
            onChangeText={handleDescriptionChange}
          />
        </Row>
        <Row icon={<Icon name="currency" />}>
          <InputOutlined
            border={false}
            fixedHeight={false}
            placeholder="Digiteo valor da sua transação"
            value={formatAmount(amount)}
            onChangeText={handleAmountChange}
          />
        </Row>

        <Row
          icon={<Icon name="repeat" />}
          title="Movs Fixa"
          rightIcon={<Text>toggle</Text>}
        />
        <Row
          icon={<Icon name="calendar" />}
          title="Data"
          rightIcon={<Text>toggle</Text>}
        />
        <Row
          icon={<Icon name="wallet" />}
          title="Modalidades"
          rightIcon={
            <View>
              <Icon name="arrow" color="#101010" />
            </View>
          }
        />
      </styled.Container>
    </styled.CreateTransactions>
  );
}
