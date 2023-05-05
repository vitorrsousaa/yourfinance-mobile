import { DetailsGoalsViewModelProps } from './DetailsGoals.view-model';
import { DetailsGoalsViewProps } from './DetailsGoals';
import * as styled from './DetailsGoals.styles';
import { Text } from '../../../../components/Text';
import { View } from 'react-native';
import Touchable from '../../../../components/Touchable';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '../../components/ProgressBar';
import { useMemo } from 'react';
import formatAmount from '../../../../utils/formatAmout';
import { FlatList } from 'react-native-gesture-handler';
import TransactionDetailHistoric from './components/TransactionDetailHistoric';
import Modal from '../../../../components/Modal';
import InputOutlined from '../../../../components/InputOutlined';
import { formatDate } from '../../../../utils/formatDate';
import Icon from '../../../../components/Icons';

interface Props {
  viewModel: DetailsGoalsViewModelProps;
  props: DetailsGoalsViewProps;
}

export function DetailsGoalsView({ viewModel, props }: Props) {
  const { ...detailProps } = props;

  const {
    removing,
    goal,
    amount,
    updatingGoal,
    modalIncomeVisible,
    modalOutcomeVisible,
    modalRemoveVisible,
    inputIsValid,
    handleRemoveGoal,
    toggleVisibleModalIncome,
    toggleVisibleModalOutcome,
    toggleVisibleModalRemove,
    handleAmountChange,
    getErrorMessageByFieldName,
    handleCreateTransactionGoal,
  } = viewModel;

  const { balance, goalName, goalCost, historicTransaction, payOff } = goal;

  const navigation = useNavigation();

  const progress = useMemo(() => {
    return (balance / goalCost) * 100;
  }, [goal._id, balance]);

  const { colors } = useTheme();

  return (
    <styled.DetailsGoals>
      <styled.Header>
        <styled.ContainerTextMain>
          <Icon name="target" />
          <Text weight="500" size={20} color={colors.white[100]}>
            {goalName}
          </Text>
        </styled.ContainerTextMain>
        <View style={{ flexDirection: 'row' }}>
          <Touchable
            item="arrow"
            onPress={navigation.goBack}
            style={{ marginRight: 8 }}
          />
          <Touchable item="trash" onPress={toggleVisibleModalRemove} />
        </View>
      </styled.Header>

      <styled.ContainerInfo>
        <View style={{ gap: 8 }}>
          <Text weight="500" size={28}>
            {formatAmount(balance)}
          </Text>
          <Text weight="500" size={16} color={colors.black[500]}>
            de {formatAmount(goalCost)}
          </Text>
        </View>

        <ProgressBar progress={progress} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Data inicio: {formatDate(goal.goalTime.initialDate)}</Text>
          <Text>Data final: {formatDate(goal.goalTime.endDate)}</Text>
        </View>
      </styled.ContainerInfo>

      {payOff === 0 ? (
        <styled.Container>
          <Text>Parabens, você concluiu a sua meta</Text>
        </styled.Container>
      ) : (
        <>
          <styled.Container>
            <Text size={18} weight="500">
              Histórico
            </Text>
            {historicTransaction.length > 0 ? (
              <View style={{ flex: 1, paddingBottom: 86 }}>
                <FlatList
                  data={historicTransaction}
                  keyExtractor={(item) => item._id}
                  renderItem={({ item }) => (
                    <TransactionDetailHistoric transaction={item} />
                  )}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        height: 2,
                        backgroundColor: colors.black[200],
                        marginVertical: 16,
                      }}
                    />
                  )}
                />
              </View>
            ) : (
              <Text>Você ainda não cadastrou nenhuma transação.</Text>
            )}
          </styled.Container>

          <styled.Footer>
            <styled.ButtonFooter
              activeOpacity={0.9}
              onPress={toggleVisibleModalOutcome}
            >
              <Icon name="upload" />
              <Text weight="500">Resgatar</Text>
            </styled.ButtonFooter>

            <styled.ButtonFooter
              income
              activeOpacity={0.9}
              onPress={toggleVisibleModalIncome}
            >
              <Icon name="download" />
              <Text weight="500">Guardar</Text>
            </styled.ButtonFooter>
          </styled.Footer>
        </>
      )}

      <Modal
        visible={modalRemoveVisible}
        type="danger"
        onClose={toggleVisibleModalRemove}
        title="Você tem certeza que deseja excluir sua meta?"
        subtitle="Essa ação não pode ser desfeita!"
        action="Deletar"
        onAction={handleRemoveGoal}
        isLoadingAction={removing}
      />

      <Modal
        visible={modalOutcomeVisible}
        onClose={toggleVisibleModalOutcome}
        type="danger"
        title="Quanto você deseja resgatar?"
        subtitle="Lembre-se, você esta cada vez mais distante da sua meta."
        action="Resgatar"
        onAction={() => handleCreateTransactionGoal('LESS')}
        isLoadingAction={updatingGoal}
        isDisabledAction={inputIsValid}
      >
        <InputOutlined
          placeholder="R$ 0,00"
          keyboardType="number-pad"
          autoCorrect={false}
          returnKeyType="next"
          value={formatAmount(amount)}
          onChangeText={(text) => handleAmountChange(text, 'LESS')}
          error={getErrorMessageByFieldName('amount')}
        />
      </Modal>

      <Modal
        visible={modalIncomeVisible}
        onClose={toggleVisibleModalIncome}
        title="Quanto você deseja guardar?"
        subtitle="Você esta cada vez mais próximo de atingir seu objetivo!"
        action="Guardar"
        onAction={() => handleCreateTransactionGoal('MORE')}
        isLoadingAction={updatingGoal}
        isDisabledAction={inputIsValid}
      >
        <InputOutlined
          placeholder="R$ 0,00"
          keyboardType="number-pad"
          autoCorrect={false}
          returnKeyType="next"
          value={formatAmount(amount)}
          onChangeText={(text) => handleAmountChange(text, 'MORE')}
          error={getErrorMessageByFieldName('amount')}
        />
      </Modal>
    </styled.DetailsGoals>
  );
}
