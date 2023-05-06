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
    selectedCategory,
    category,
    isValid,
    modalityModalIsVisible,
    isLoadingModalities,
    selectedModality,
    getModalities,
    handleCategoryChange,
    goBack,
    handleAmountChange,
    handleDescriptionChange,
    toggleModalityModal,
    onSelectedModality,
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
          title={selectedModality ? selectedModality?.name : 'Modalidades'}
          isLoading={isLoadingModalities}
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
        onClose={toggleModalityModal}
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
    </styled.CreateTransactions>
  );
}
