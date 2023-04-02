import { SettingsViewModelProps } from './Settings.view-model';
import { SettingsViewProps } from './Settings';
import * as styled from './Settings.styles';
import { Text } from 'react-native';

interface Props {
  viewModel: SettingsViewModelProps;
  props: SettingsViewProps;
}

export function SettingsView({ viewModel, props }: Props) {
  const { ...settingsProps } = props;

  return (
    <styled.Settings>
      <Text>Settings</Text>
    </styled.Settings>
  );
}
