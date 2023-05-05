import { memo } from 'react';

import { ToggleView } from './Toggle.view';
import { ToggleViewModel } from './Toggle.view-model';
import { SwitchProps } from 'react-native';

export interface ToggleProps extends SwitchProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface ToggleViewProps extends Omit<ToggleProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

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
