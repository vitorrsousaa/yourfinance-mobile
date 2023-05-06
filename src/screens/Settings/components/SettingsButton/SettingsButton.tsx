import { memo,ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { SettingsButtonView } from './SettingsButton.view';
import { SettingsButtonViewModel } from './SettingsButton.view-model';

export interface SettingsButtonProps extends TouchableOpacityProps {
  title: string;
  icon: ReactNode;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface SettingsButtonViewProps extends Omit<SettingsButtonProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function SettingsButton(props: SettingsButtonProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <SettingsButtonView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = SettingsButtonViewModel();

  return viewModel;
}

export default memo(SettingsButton);
