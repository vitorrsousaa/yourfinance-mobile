import { memo } from 'react';

import { ContinuousButtonView } from './ContinuousButton.view';
import { ContinuousButtonViewModel } from './ContinuousButton.view-model';
import { TouchableOpacityProps } from 'react-native';

export interface ContinuousButtonProps extends TouchableOpacityProps {
  isValid: boolean;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface ContinuousButtonViewProps
  extends Omit<ContinuousButtonProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function ContinuousButton(props: ContinuousButtonProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <ContinuousButtonView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = ContinuousButtonViewModel();

  return viewModel;
}

export default memo(ContinuousButton);
