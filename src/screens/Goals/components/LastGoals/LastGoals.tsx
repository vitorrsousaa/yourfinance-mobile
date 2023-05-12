import { memo } from 'react';

import { TGoal } from '../../../../types/Goal';

import { LastGoalsView } from './LastGoals.view';
import { LastGoalsViewModel } from './LastGoals.view-model';

export interface LastGoalsProps {
  goals: TGoal[];
  hasError: boolean;
  isLoading: boolean;
}

export interface LastGoalsViewProps extends Omit<LastGoalsProps, ''> {}

function LastGoals(props: LastGoalsProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <LastGoalsView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = LastGoalsViewModel();

  return viewModel;
}

export default memo(LastGoals);
