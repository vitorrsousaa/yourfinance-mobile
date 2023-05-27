import { memo } from 'react';
import { ViewProps } from 'react-native';

import { RadioView } from './Radio.view';
import { RadioViewModel } from './Radio.view-model';

export interface RadioProps extends ViewProps {
  selected?: boolean;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface RadioViewProps extends Omit<RadioProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Radio(props: RadioProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <RadioView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = RadioViewModel();

  return viewModel;
}

export default memo(Radio);
