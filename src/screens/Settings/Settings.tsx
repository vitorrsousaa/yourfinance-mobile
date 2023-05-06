import { memo } from 'react';

import { SettingsView } from './Settings.view';
import { SettingsViewModel } from './Settings.view-model';

export interface SettingsProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface SettingsViewProps
    extends Omit<SettingsProps, ''> {
// Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Settings(props: SettingsProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return (
    <SettingsView viewModel={viewModel} props={viewProps} />
  );
}

export function useViewModel(){
  const viewModel = SettingsViewModel();

  return viewModel;
}

export default memo(Settings);
