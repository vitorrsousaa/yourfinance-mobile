import { memo } from 'react';

import { ProgressBarView } from './ProgressBar.view';
import { ProgressBarViewModel } from './ProgressBar.view-model';

export interface ProgressBarProps {
  progress: number;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface ProgressBarViewProps extends Omit<ProgressBarProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function ProgressBar(props: ProgressBarProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <ProgressBarView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = ProgressBarViewModel();

  return viewModel;
}

export default memo(ProgressBar);
