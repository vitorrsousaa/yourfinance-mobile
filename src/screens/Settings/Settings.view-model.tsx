import { useNavigation } from '@react-navigation/native';

import { SettingsRoutesNavigationProp } from '../../routes/private/Settings.routes';

export interface SettingsViewModelProps {
  handleNavigateToMyAccount: () => void;
}

export function SettingsViewModel() {
  const navigationSettings = useNavigation<SettingsRoutesNavigationProp>();

  function handleNavigateToMyAccount() {
    navigationSettings.navigate('MyAccount');
  }

  return {
    handleNavigateToMyAccount,
  };
}
