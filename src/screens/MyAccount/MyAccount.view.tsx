import { MyAccountViewModelProps } from './MyAccount.view-model';
import { MyAccountViewProps } from './MyAccount';
import * as styled from './MyAccount.styles';
import { View } from 'react-native';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../components/Text';
import { useTheme } from 'styled-components/native';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';

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
    <styled.MyAccount>
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

        <View
          style={{
            gap: 24,
            paddingBottom: 16,
            borderBottomColor: colors.black[200],
            borderBottomWidth: 1,
          }}
        >
          <View style={{ gap: 4 }}>
            <Text size={20} weight="500" color={colors.red[600]}>
              Danger zone
            </Text>
            <Text size={14} color={colors.black[700]}>
              Cuidado, essas ações não podem ser desfeitas
            </Text>
          </View>
          <Button variant="danger" style={{ width: '100%' }}>
            Excluir conta
          </Button>
        </View>
      </styled.Container>
    </styled.MyAccount>
  );
}
