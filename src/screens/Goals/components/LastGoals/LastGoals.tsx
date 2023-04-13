import { memo } from 'react';

import { LastGoalsView } from './LastGoals.view';
import { LastGoalsViewModel } from './LastGoals.view-model';
import { TGoalResponse } from '../../../../types/Goal';

export interface LastGoalsProps {
  goals: TGoalResponse[];
  hasError: boolean;
  isLoading: boolean;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface LastGoalsViewProps extends Omit<LastGoalsProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

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
