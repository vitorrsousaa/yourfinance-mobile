import { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import Icon from '../../../../components/Icons';
import InputOutlined from '../../../../components/InputOutlined';
import Modal from '../../../../components/Modal';
import { Text } from '../../../../components/Text';
import Touchable from '../../../../components/Touchable';
import formatAmount from '../../../../utils/formatAmout';
import ProgressBar from '../../components/ProgressBar';

import TransactionDetailHistoric from './components/TransactionDetailHistoric';
import { DetailsGoalsViewProps } from './DetailsGoals';
import * as styled from './DetailsGoals.styles';
import { DetailsGoalsViewModelProps } from './DetailsGoals.view-model';

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

  const { balance, name, date, historic, payOff, total } = goal;

  const navigation = useNavigation();

  const progress = useMemo(() => {
    return (balance / total) * 100;
  }, [goal.id, balance]);

  const { colors } = useTheme();

  // console.log(historic);

  return (
    <styled.DetailsGoals>
      <styled.Header>
        <styled.ContainerTextMain>
          <Icon name="target" />
          <Text weight="500" size={20} color={colors.white[100]}>
            {name}
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
            de {formatAmount(total)}
          </Text>
        </View>

        <ProgressBar progress={progress} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Data inicio: {date.initial}</Text>
          <Text>Data final: {date.end}</Text>
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
            {historic.length > 0 ? (
              <View style={{ flex: 1, paddingBottom: 86 }}>
                <FlatList
                  data={historic}
                  keyExtractor={(item) => item.id}
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
              <Text>Você ainda não adicionou valor.</Text>
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
        subtitle="Cuidado! Ao prosseguir, essa ação será definitiva e não poderá ser revertida. Pense bem antes de confirmar!"
        action="Deletar"
        onAction={handleRemoveGoal}
        isLoadingAction={removing}
      />

      <Modal
        visible={modalOutcomeVisible}
        onClose={toggleVisibleModalOutcome}
        type="danger"
        title="Quanto você deseja resgatar?"
        subtitle="Parece que você está mais distante da meta, mas não desanime! Estamos aqui para te apoiar!"
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
        subtitle="Você esta quase atingindo a meta que definiu para o seu potinho! Continue assim!"
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
