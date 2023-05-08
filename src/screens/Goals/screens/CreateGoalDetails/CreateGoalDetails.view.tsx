import { CreateGoalDetailsViewModelProps } from './CreateGoalDetails.view-model';
import { CreateGoalDetailsViewProps } from './CreateGoalDetails';
import * as styled from './CreateGoalDetails.styles';
import { View } from 'react-native';
import Header from '../../../../components/Header';
import Button from '../../../../components/Button';
import { Text } from '../../../../components/Text';
import formatAmount from '../../../../utils/formatAmout';
import { useTheme } from 'styled-components/native';

interface Props {
  viewModel: CreateGoalDetailsViewModelProps;
  props: CreateGoalDetailsViewProps;
}

export function CreateGoalDetailsView({ viewModel, props }: Props) {
  const { ...createGoalDetailsProps } = props;

  const { goal, month, isSubmitting, goBack, handleCreateGoal } = viewModel;

  const { colors } = useTheme();

  return (
    <styled.CreateGoalDetails>
      <Header title={'Crie o potinho'} onPressLeftIcon={goBack} />

      <View
        style={{
          padding: 32,
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <View style={{ gap: 16 }}>
          <Text color={colors.black[700]} size={20} weight="500">
            Adicionar
          </Text>
          <Text weight={'500'} size={32}>
            {formatAmount(goal.goalCost)}
            <Text color={colors.black[700]} size={16}>
              /mês
            </Text>
          </Text>
          <Text color={colors.black[500]}>
            Na meta{' '}
            <Text weight="500" color={colors.black[500]}>
              {goal.goalName}
            </Text>
            . Totalizando{' '}
            <Text weight="500" color={colors.black[500]}>
              {formatAmount(goal.goalCost * month)}
            </Text>{' '}
            em {month} meses.
          </Text>
          <Text color={colors.black[500]}>
            Verifique as informações e clique em confirmar
          </Text>
        </View>
        <Button
          variant="primary"
          onPress={handleCreateGoal}
          style={{ width: '100%' }}
          loading={isSubmitting}
        >
          Confirmar
        </Button>
      </View>
    </styled.CreateGoalDetails>
  );
}
