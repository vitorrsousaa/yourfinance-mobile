import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Text } from '../../components/Text';
import Welcome from '../../components/Welcome';
import { isAndroid } from '../../utils/isAndroid';

import { RegisterViewProps } from './Register';
import * as styled from './Register.styles';
import { RegisterViewModelProps } from './Register.view-model';

interface Props {
  viewModel: RegisterViewModelProps;
  props: RegisterViewProps;
}

export function RegisterView({ viewModel, props }: Props) {
  const { ...registerProps } = props;

  const {
    email,
    name,
    password,
    isFormValid,
    isSubmitting,
    getErrorMessageByFieldName,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    navigateToLoginScreen,
    handleSubmit,
  } = viewModel;

  const { colors } = useTheme();

  return (
    <styled.Register behavior={isAndroid ? 'height' : 'padding'}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Welcome />

        <View style={{ marginVertical: 32 }}>
          <Text weight="500" size={20} color={colors.white[100]}>
            Crie sua conta
          </Text>
        </View>

        <View>
          <Input
            label="Nome"
            placeholder="Digite seu nome"
            error={getErrorMessageByFieldName('name')}
            onChangeText={handleNameChange}
            value={name}
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
          />

          <Input
            label="E-mail"
            placeholder="Digite seu e-mail"
            error={getErrorMessageByFieldName('email')}
            onChangeText={handleEmailChange}
            value={email}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            error={getErrorMessageByFieldName('password')}
            value={password}
            returnKeyType="go"
            onChangeText={handlePasswordChange}
            secureTextEntry
          />
        </View>
        <styled.ContainerButton>
          <Button
            variant="primary"
            disabled={!isFormValid}
            loading={isSubmitting}
            onPress={handleSubmit}
          >
            Criar conta
          </Button>

          <View style={{ flexDirection: 'row' }}>
            <Text color={colors.white[100]}>Já possui uma conta? </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={navigateToLoginScreen}
            >
              <Text color={colors.green[400]} weight="700">
                Faça login
              </Text>
            </TouchableOpacity>
          </View>
        </styled.ContainerButton>
      </ScrollView>
    </styled.Register>
  );
}
