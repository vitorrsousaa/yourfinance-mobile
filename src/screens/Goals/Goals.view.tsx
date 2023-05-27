/* eslint-disable indent */
import { useMemo } from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';
import PlusButton from '../../components/PlusButton';
import { Text } from '../../components/Text';
import { useGoals } from '../../hooks/useGoals';
import formatAmount from '../../utils/formatAmout';

import LastGoals from './components/LastGoals';
import { GoalsViewProps } from './Goals';
import * as styled from './Goals.styles';
import { GoalsViewModelProps } from './Goals.view-model';

interface Props {
  viewModel: GoalsViewModelProps;
  props: GoalsViewProps;
}

export function GoalsView({ viewModel, props }: Props) {
  const { ...goalsProps } = props;

  const { handleNavigateToCreateGoalInformation } = viewModel;

  const { goals, isErrorGoals, isLoadingGoals } = useGoals();

  const total = useMemo(
    () =>
      goals
        ? goals.reduce((acc, goal) => {
            if (goal.payOff == 0) {
              return acc;
            }

            return (acc += goal.balance);
          }, 0)
        : 0,
    [goals]
  );

  console.log(isLoadingGoals);

  return (
    <styled.Goals {...goalsProps}>
      <Header title="Metas" />

      {isLoadingGoals && (
        <View style={{ paddingHorizontal: 24, paddingTop: 16 }}>
          <View>
            <Text weight="500">Total acumulado</Text>
            <Text weight="500" size={28}>
              {formatAmount(total)}
            </Text>
          </View>
        </View>
      )}
      <LastGoals
        goals={goals}
        hasError={isErrorGoals}
        isLoading={isLoadingGoals}
      />
      {!isErrorGoals && (
        <PlusButton onPress={handleNavigateToCreateGoalInformation} />
      )}
    </styled.Goals>
  );
}
