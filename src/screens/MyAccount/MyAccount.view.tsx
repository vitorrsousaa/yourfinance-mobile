import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import DangerZone from '../../components/DangerZone';
import Header from '../../components/Header';
import { Text } from '../../components/Text';
import { useAuth } from '../../hooks/useAuth';

import { MyAccountViewProps } from './MyAccount';
import * as styled from './MyAccount.styles';
import { MyAccountViewModelProps } from './MyAccount.view-model';

interface Props {
  viewModel: MyAccountViewModelProps;
  props: MyAccountViewProps;
}

export function MyAccountView({ viewModel, props }: Props) {
  const { ...myAccountProps } = props;

  const navigation = useNavigation();

  const { colors } = useTheme();

  const { auth } = useAuth();

  return (
    <styled.MyAccount {...myAccountProps}>
      <Header title="Minha conta" onPressLeftIcon={() => navigation.goBack()} />

      <styled.Container>
        <View
          style={{
            gap: 24,
            paddingBottom: 16,
            borderBottomColor: colors.black[200],
            borderBottomWidth: 1,
          }}
        >
          <Text size={20} weight="500">
            Informações pessoais
          </Text>
          <View>
            <Text size={14} color={colors.black[600]}>
              Nome
            </Text>
            <Text size={16}>{auth.user.name}</Text>
          </View>
          <View>
            <Text size={14} color={colors.black[600]}>
              E-mail
            </Text>
            <Text size={16}>{auth.user.email}</Text>
          </View>
        </View>

        <DangerZone
          action="Excluir conta"
          onAction={() => console.log('onAction')}
        />
      </styled.Container>
    </styled.MyAccount>
  );
}
