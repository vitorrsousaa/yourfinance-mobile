import { SettingsViewModelProps } from './Settings.view-model';
import { SettingsViewProps } from './Settings';
import * as styled from './Settings.styles';
import { View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import Touchable from '../../components/Touchable';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Text } from '../../components/Text';

interface Props {
  viewModel: SettingsViewModelProps;
  props: SettingsViewProps;
}

export function SettingsView({ viewModel, props }: Props) {
  const { ...settingsProps } = props;

  const { handleLogout } = useAuth();

  return (
    <styled.Settings>
      <Header title="Configurações" />
      <View>
        <View>
          <Text>Geral</Text>
          <Text>Informações da sua conta</Text>
        </View>
        <View>
          <Text>Suporte</Text>
          <Text>Deixe um feedback</Text>
        </View>
        <Button
          variant="danger"
          onPress={handleLogout}
          style={{ width: '100%' }}
        >
          Desconectar
        </Button>
      </View>
    </styled.Settings>
  );
}
