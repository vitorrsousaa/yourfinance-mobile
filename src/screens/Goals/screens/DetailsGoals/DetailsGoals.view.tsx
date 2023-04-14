import { DetailsGoalsViewModelProps } from './DetailsGoals.view-model';
import { DetailsGoalsViewProps } from './DetailsGoals';
import * as styled from './DetailsGoals.styles';
import { Text } from '../../../../components/Text';
import { View } from 'react-native';
import { Target } from '../../../../components/Icons/Target';
import Touchable from '../../../../components/Touchable';
import { useTheme } from 'styled-components/native';
import { Upload } from '../../../../components/Icons/Upload';
import { Download } from '../../../../components/Icons/Download';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '../../components/ProgressBar';
import { useMemo } from 'react';
import formatAmount from '../../../../utils/formatAmout';
import { FlatList } from 'react-native-gesture-handler';
import TransactionDetailHistoric from './components/TransactionDetailHistoric';
import Modal from '../../../../components/Modal';

interface Props {
  viewModel: DetailsGoalsViewModelProps;
  props: DetailsGoalsViewProps;
}

export function DetailsGoalsView({ viewModel, props }: Props) {
  const { goal } = props;
  const {
    modalIncomeVisible,
    modalOutcomeVisible,
    modalRemoveVisible,
    handleRemoveGoal,
    handleVisibleModalIncome,
    handleVisibleModalOutcome,
    handleVisibleModalRemove,
  } = viewModel;

  const { balance, goalName, goalCost, historicTransaction } = goal;

  const navigation = useNavigation();

  const progress = useMemo(() => {
    return (balance / goalCost) * 100;
  }, [goal._id]);

  const { colors } = useTheme();

  return (
    <styled.DetailsGoals>
      <styled.Header>
        <styled.ContainerTextMain>
          <Target />
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
          <Touchable item="trash" onPress={handleVisibleModalRemove} />
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
      </styled.ContainerInfo>

      <styled.ContainerHistoric>
        <Text size={16} weight="500">
          Histórico
        </Text>
        <View>
          <FlatList
            data={historicTransaction}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TransactionDetailHistoric transaction={item} />
            )}
          />
        </View>
      </styled.ContainerHistoric>

      <styled.Footer>
        <styled.ButtonFooter
          activeOpacity={0.9}
          onPress={handleVisibleModalOutcome}
        >
          <Upload />
          <Text weight="500">Resgatar</Text>
        </styled.ButtonFooter>

        <styled.ButtonFooter
          income
          activeOpacity={0.9}
          onPress={handleVisibleModalIncome}
        >
          <Download />
          <Text weight="500">Guardar</Text>
        </styled.ButtonFooter>
      </styled.Footer>

      <Modal
        visible={modalRemoveVisible}
        type="danger"
        onClose={handleVisibleModalRemove}
        title="Você tem certeza que deseja excluir sua meta?"
        subtitle="Essa ação não pode ser desfeita!"
        action="Deletar"
      />

      <Modal
        visible={modalOutcomeVisible}
        onClose={handleVisibleModalOutcome}
        type="danger"
        title="Quanto você deseja resgatar?"
        subtitle="Lembre-se, você esta cada vez mais distante da sua meta."
        action="Resgatar"
      />

      <Modal
        visible={modalIncomeVisible}
        onClose={handleVisibleModalIncome}
        title="Quanto você deseja guardar?"
        subtitle="Você esta cada vez mais próximo de atingir seu objetivo!"
        action="Guardar"
      />
    </styled.DetailsGoals>
  );
}
