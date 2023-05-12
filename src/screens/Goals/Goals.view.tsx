import { useTheme } from 'styled-components/native';

import Header from '../../components/Header';
import PlusButton from '../../components/PlusButton';
import { Text } from '../../components/Text';
import Touchable from '../../components/Touchable';
import { useGoals } from '../../hooks/useGoals';

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

  const { colors } = useTheme();

  const { goals, isErrorGoals, isLoadingGoals } = useGoals();

  return (
    <styled.Goals>
      <Header title="Metas" rightIcon={<Touchable item="search" />} />

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
