import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Icon from '../../components/Icons';
import { Text } from '../../components/Text';
import { useAuth } from '../../hooks/useAuth';

import SettingsButton from './components/SettingsButton';
import SettingsSection from './components/SettingsSection';
import { SettingsViewProps } from './Settings';
import * as styled from './Settings.styles';
import { SettingsViewModelProps } from './Settings.view-model';

interface Props {
  viewModel: SettingsViewModelProps;
  props: SettingsViewProps;
}

export function SettingsView({ viewModel, props }: Props) {
  const { ...settingsProps } = props;

  const { handleNavigateToMyAccount } = viewModel;

  const navigation = useNavigation();

  const { handleLogout } = useAuth();

  return (
    <styled.Settings {...settingsProps}>
      <Header
        title="Configurações"
        onPressLeftIcon={() => navigation.goBack()}
      />
      <styled.Container>
        <View style={{ gap: 32 }}>
          <SettingsSection title="Geral">
            <SettingsButton
              title="Informações da sua conta"
              icon={<Icon name="user" />}
              onPress={handleNavigateToMyAccount}
            />
          </SettingsSection>
        </View>

        <Button
          variant="danger"
          onPress={handleLogout}
          style={{ width: '100%' }}
        >
          Desconectar
        </Button>
      </styled.Container>
    </styled.Settings>
  );
}
