import { CreateTransactionsViewModelProps } from './CreateTransactions.view-model';
import { CreateTransactionsViewProps } from './CreateTransactions';
import * as styled from './CreateTransactions.styles';
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Header from '../../components/Header';
import InputOutlined from '../../components/InputOutlined';
import formatAmount from '../../utils/formatAmout';
import { Text } from '../../components/Text';
import Row from './components/Row';
import Icon from '../../components/Icons';
import Toggle from '../../components/Toggle';
import Button from '../../components/Button';
import { useTheme } from 'styled-components/native';
import Modal from '../../components/Modal';

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
    category,
    isValid,
    modalityModalIsVisible,
    handleCategoryChange,
    goBack,
    handleAmountChange,
    handleDescriptionChange,
    toggleModalityModal,
  } = viewModel;

  const { colors } = useTheme();

  return (
    <styled.CreateTransactions>
      <Header title="Adicione uma transação" onPressLeftIcon={goBack} />

      <styled.Container>
        <Row
          icon={<Icon name="certificate" />}
          title={category.name}
          rightIcon={
            <Toggle
              value={selectedCategory}
              onValueChange={handleCategoryChange}
            />
          }
        />

        <Row icon={<Icon name="pencil" />}>
          <InputOutlined
            border={false}
            fixedHeight={false}
            placeholder="Digite uma descrição da sua transação"
            value={description}
            onChangeText={handleDescriptionChange}
            autoCorrect={false}
            maxLength={15}
          />
        </Row>

        <Row
          icon={<Icon name="wallet" />}
          title="Modalidades"
          rightIcon={
            <TouchableOpacity onPress={toggleModalityModal}>
              <styled.ContainerArrow>
                <Icon name="arrow" color={colors.black[900]} />
              </styled.ContainerArrow>
            </TouchableOpacity>
          }
        />

        <Row
          icon={<Icon name="calendar" />}
          title="Data"
          rightIcon={<Text>toggle</Text>}
        />

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
          rightIcon={<Toggle />}
        />

        <Button variant="primary" disabled={!isValid}>
          Enviar
        </Button>
      </styled.Container>

      <Modal
        visible={modalityModalIsVisible}
        title="Selecione a modalidade"
        subtitle="modality"
        action="teste"
        onAction={() => {
          console.log('action');
        }}
        isLoadingAction={false}
        onClose={toggleModalityModal}
      >
        <View>
          <Text>Testando</Text>
        </View>
      </Modal>
    </styled.CreateTransactions>
  );
}
