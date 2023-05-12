import { memo } from 'react';

import { PlusButtonView } from './PlusButton.view';
import { PlusButtonViewModel } from './PlusButton.view-model';
import { TouchableOpacityProps } from 'react-native';

export interface PlusButtonProps extends TouchableOpacityProps {}

export interface PlusButtonViewProps extends Omit<PlusButtonProps, ''> {}

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
