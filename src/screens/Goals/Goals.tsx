import { memo } from 'react';

import { GoalsView } from './Goals.view';
import { GoalsViewModel } from './Goals.view-model';

export interface GoalsProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface GoalsViewProps extends Omit<GoalsProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Goals(props: GoalsProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <GoalsView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = GoalsViewModel();

  return viewModel;
}

export default memo(Goals);
