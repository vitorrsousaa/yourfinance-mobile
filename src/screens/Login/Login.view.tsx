import { LoginViewModelProps } from './Login.view-model';
import { LoginViewProps } from './Login';
import * as styled from './Login.styles';
import Welcome from '../../components/Welcome';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { View } from 'react-native';
import { isAndroid } from '../../utils/isAndroid';
import { useState } from 'react';

interface Props {
  viewModel: LoginViewModelProps;
  props: LoginViewProps;
}

export function LoginView({ viewModel, props }: Props) {
  const { ...loginProps } = props;

  const { email, handleEmailChange, getErrorMessageByFieldName } = viewModel;

  return (
    <styled.Login behavior={isAndroid ? 'height' : 'padding'}>
      <Welcome />
      <View>
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          error={getErrorMessageByFieldName('email')}
          keyboardType="email-address"
          autoCorrect={false}
          onChangeText={handleEmailChange}
          value={email}
        />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          autoCorrect={false}
          returnKeyType="go"
        />
      </View>
      <Button variant="primary" disabled={true}>
        Fazer login
      </Button>
    </styled.Login>
  );
}
