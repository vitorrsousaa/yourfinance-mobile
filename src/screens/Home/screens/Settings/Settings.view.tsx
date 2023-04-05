import React from 'react';
import { SettingsViewModelProps } from './Settings.view-model';
import { SettingsViewProps } from './Settings';
import * as styled from './Settings.styles';
import { Text } from 'react-native';
import { useAuth } from '../../../../hooks/useAuth';
import Touchable from '../../../../components/Touchable';

interface Props {
  viewModel: SettingsViewModelProps;
  props: SettingsViewProps;
}

export function SettingsView({ viewModel, props }: Props) {
  const { ...settingsProps } = props;

  const { handleLogout } = useAuth();

  return (
    <styled.Settings>
      <Text>Settings</Text>
      <Text>Settings</Text>
      <Text>Settings</Text>
      <Text>Settings</Text>
      <Text>Settings</Text>
      <Text>Settings</Text>
      <Touchable item="user" onPress={handleLogout} />
    </styled.Settings>
  );
}
