import { memo } from 'react';

import { GoalsView } from './Goals.view';
import { GoalsViewModel } from './Goals.view-model';

export interface GoalsProps {}

export interface GoalsViewProps extends Omit<GoalsProps, ''> {}

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
