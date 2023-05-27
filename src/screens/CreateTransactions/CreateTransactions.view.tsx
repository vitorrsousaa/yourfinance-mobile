import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from 'styled-components/native';

import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';
import Header from '../../components/Header';
import Icon from '../../components/Icons';
import InputOutlined from '../../components/InputOutlined';
import { Text } from '../../components/Text';
import Toggle from '../../components/Toggle';
import formatAmount from '../../utils/formatAmout';
import { formatDate } from '../../utils/formatDate';
import { isAndroid } from '../../utils/isAndroid';

import ModalRepeatTransaction from './components/ModalRepeatTransaction';
import ModalSelectedModality from './components/ModalSelectedModality';
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
  } = viewModel;

  const { colors } = useTheme();
  return (
    <styled.CreateTransactions {...createTransactionsProps}>
      <KeyboardAvoidingView behavior={isAndroid ? 'height' : 'padding'}>
        <Header
          title="Adicione uma transação"
          onPressLeftIcon={!isSubmitting ? goBack : undefined}
        />

        <ScrollView>
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

            <Row icon={<Icon name="calendar" />} onPress={toggleDatePicker}>
              <InputOutlined
                border={false}
                fixedHeight={false}
                value={formatDate(date.toString())}
                editable={false}
              />
            </Row>

            <Row icon={<Icon name="currency" />}>
              <InputOutlined
                border={false}
                fixedHeight={false}
                value={formatAmount(amount)}
                onChangeText={handleAmountChange}
                keyboardType="number-pad"
              />
            </Row>

            {/* <Row
          icon={<Icon name="repeat" />}
          title="Movs Fixa"
          onPress={handleClickOnRowMovFixed}
          rightIcon={
            <Toggle
              value={transactionRepeat}
              onValueChange={handleClickOnToggleMovFixed}
            />
          }
        /> */}

            <Button
              variant="primary"
              disabled={!isValid}
              onPress={handleSubmit}
              loading={isSubmitting}
              style={{ width: '100%' }}
            >
              Enviar
            </Button>

            <DatePicker
              visible={datePickerIsVisible}
              value={date}
              onChange={(event, date) => handleChangeDate(event, date)}
              style={{ height: 150 }}
            />

            {datePickerIsVisible && !isAndroid && (
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-around' }}
              >
                <TouchableOpacity onPress={toggleDatePicker}>
                  <Text>Salvar</Text>
                </TouchableOpacity>
              </View>
            )}
          </styled.Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <ModalSelectedModality
        isVisible={modalityModalIsVisible}
        data={getModalities()}
        onPressItem={onSelectedModality}
        onToggle={toggleModalityModal}
        selectedModality={selectedModality}
      />

      <ModalRepeatTransaction
        isVisible={transactionRepeatModalIsVisible}
        onToggle={toggleTransactionRepeatModal}
        onPlus={handlePlusMonthRepeatTransaction}
        month={monthsThatRepeatTransaction}
        onMinus={handleMinusMonthRepeatTransaction}
      />
    </styled.CreateTransactions>
  );
}
