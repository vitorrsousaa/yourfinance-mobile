import { memo } from 'react';

import { PlusButtonView } from './PlusButton.view';
import { PlusButtonViewModel } from './PlusButton.view-model';
import { TouchableOpacityProps } from 'react-native';

export interface PlusButtonProps extends TouchableOpacityProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface PlusButtonViewProps extends Omit<PlusButtonProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function PlusButton(props: PlusButtonProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <PlusButtonView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = PlusButtonViewModel();

  return viewModel;
}

export default memo(PlusButton);
