import { SettingsViewModelProps } from './Settings.view-model';
import { SettingsViewProps } from './Settings';
import * as styled from './Settings.styles';
import { View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Text } from '../../components/Text';
import SettingsSection from './components/SettingsSection';

import SettingsButton from './components/SettingsButton';
import { useNavigation } from '@react-navigation/native';
import Icon from '../../components/Icons';

interface Props {
  viewModel: SettingsViewModelProps;
  props: SettingsViewProps;
}

export function SettingsView({ viewModel, props }: Props) {
  const { ...settingsProps } = props;

  const { handleNavigateToMyAccount, handleNavigateToFeedback } = viewModel;

  const navigation = useNavigation();

  const { handleLogout } = useAuth();

  return (
    <styled.Settings>
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
          <SettingsSection title="Suporte">
            <SettingsButton
              title="Deixe um feedback"
              icon={<Icon name="chat" />}
              onPress={handleNavigateToFeedback}
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