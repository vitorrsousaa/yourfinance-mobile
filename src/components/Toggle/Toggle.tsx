import { memo } from 'react';

import { ToggleView } from './Toggle.view';
import { ToggleViewModel } from './Toggle.view-model';
import { SwitchProps } from 'react-native';

export interface ToggleProps extends SwitchProps {}

export interface ToggleViewProps extends Omit<ToggleProps, ''> {}

function Toggle(props: ToggleProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <ToggleView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = ToggleViewModel();

  return viewModel;
}

export default memo(Toggle);
