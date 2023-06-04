import { memo } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ContinuousButtonView } from './ContinuousButton.view';
import { ContinuousButtonViewModel } from './ContinuousButton.view-model';

export interface ContinuousButtonProps extends TouchableOpacityProps {
  isValid: boolean;
}

export interface ContinuousButtonViewProps
  extends Omit<ContinuousButtonProps, ''> {}

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
