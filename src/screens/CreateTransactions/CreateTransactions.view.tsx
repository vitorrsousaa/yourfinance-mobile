import { FlatList, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Icon from '../../components/Icons';
import InputOutlined from '../../components/InputOutlined';
import Modal from '../../components/Modal';
import Radio from '../../components/Radio';
import { Text } from '../../components/Text';
import Toggle from '../../components/Toggle';
import formatAmount from '../../utils/formatAmout';

import Row from './components/Row';
import { CreateTransactionsViewProps } from './CreateTransactions';
import * as styled from './CreateTransactions.styles';
import { CreateTransactionsViewModelProps } from './CreateTransactions.view-model';

interface Props {
  viewModel: CreateTransactionsViewModelProps;
  props: CreateTransactionsViewProps;
}

export function CreateTransactionsView({ viewModel, props }: Props) {
  const { ...createTransactionsProps } = props;

  const {
    amount,
    description,
    isValid,
    category,
    selectedCategory,
    modalityModalIsVisible,
    isLoadingModalities,
    selectedModality,
    transactionRepeatModalIsVisible,
    transactionRepeat,
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
  } = viewModel;

  const { colors } = useTheme();

  console.log(
    'Verificar se é necessário dar um warning na tela quando o usuário trocar a category'
  );

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
          title={selectedModality ? selectedModality?.name : 'Modalidades'}
          isLoading={isLoadingModalities}
          onPress={toggleModalityModal}
          rightIcon={
            <styled.ContainerArrow rotate={180}>
              <Icon name="arrow" color={colors.black[900]} />
            </styled.ContainerArrow>
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
          onPress={handleClickOnRowMovFixed}
          rightIcon={
            <Toggle
              value={transactionRepeat}
              onValueChange={handleClickOnToggleMovFixed}
            />
          }
        />

        <Button variant="primary" disabled={!isValid}>
          Enviar
        </Button>
      </styled.Container>

      <Modal
        visible={modalityModalIsVisible}
        title="Selecione a modalidade"
        onClose={toggleModalityModal}
        customTitleSize={20}
      >
        <FlatList
          data={getModalities()}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: colors.black[300], height: 1 }} />
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                padding: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onPress={() => onSelectedModality(item)}
            >
              <Text size={18}>{item.name}</Text>
              <Radio selected={selectedModality?.name === item.name} />
            </TouchableOpacity>
          )}
        />
      </Modal>

      <Modal
        visible={transactionRepeatModalIsVisible}
        onClose={toggleTransactionRepeatModal}
        title="Selecione o período de repetição"
        customTitleSize={20}
        action="Salvar"
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Icon name="repeat" />
            <Text size={17}>Mensalmente</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <styled.ContainerArrow rotate={90}>
              <Icon name="arrow" color="black" />
            </styled.ContainerArrow>
            <Text size={18}>1</Text>
            <styled.ContainerArrow rotate={270}>
              <Icon name="arrow" color="black" />
            </styled.ContainerArrow>
          </View>
        </View>
      </Modal>
    </styled.CreateTransactions>
  );
}
