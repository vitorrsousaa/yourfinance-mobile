import { LoginViewModelProps } from './Login.view-model';
import { LoginViewProps } from './Login';
import * as styled from './Login.styles';
import Welcome from '../../components/Welcome';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { View } from 'react-native';

interface Props {
  viewModel: LoginViewModelProps;
  props: LoginViewProps;
}

export function LoginView({ viewModel, props }: Props) {
  const { ...loginProps } = props;

  return (
    <styled.Login>
      <Welcome />
      <View>
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          error="E-mail incorreto"
          keyboardType="email-address"
        />
        <Input label="Senha" placeholder="Digite sua senha" />
      </View>
      <Button variant="primary" disabled={true}>
        Fazer login
      </Button>
    </styled.Login>
  );
}
