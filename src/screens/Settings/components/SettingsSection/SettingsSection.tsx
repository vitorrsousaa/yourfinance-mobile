import { ReactNode, memo } from 'react';

import { SettingsSectionView } from './SettingsSection.view';
import { SettingsSectionViewModel } from './SettingsSection.view-model';

export interface SettingsSectionProps {
  title: string;
  children: ReactNode;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface SettingsSectionViewProps
  extends Omit<SettingsSectionProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function SettingsSection(props: SettingsSectionProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <SettingsSectionView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = SettingsSectionViewModel();

  return viewModel;
}

export default memo(SettingsSection);
