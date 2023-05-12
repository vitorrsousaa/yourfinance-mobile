import Header from '../../components/Header';
import PlusButton from '../../components/PlusButton';
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

  const { goals, isErrorGoals, isLoadingGoals } = useGoals();

  return (
    <styled.Goals {...goalsProps}>
      <Header
        title="Metas"
        rightIcon={<Touchable item="search" background="black" />}
      />

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
