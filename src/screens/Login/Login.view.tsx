import { LoginViewModelProps } from './Login.view-model';
import { LoginViewProps } from './Login';
import * as styled from './Login.styles';
import Welcome from '../../components/Welcome';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { View, ScrollView } from 'react-native';
import { isAndroid } from '../../utils/isAndroid';
import { Text } from '../../components/Text';
import { useTheme } from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  viewModel: LoginViewModelProps;
  props: LoginViewProps;
}

export function LoginView({ viewModel, props }: Props) {
  const { handleSubmit } = props;
  const { colors } = useTheme();

  const {
    email,
    password,
    isFormValid,
    isSubmitting,
    handleEmailChange,
    handlePasswordChange,
    getErrorMessageByFieldName,
  } = viewModel;

  return (
    <styled.Login behavior={isAndroid ? 'height' : 'padding'}>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Welcome />
        <Text weight="500" size={20} color={colors.white[100]}>
          Faça seu login
        </Text>
        <View>
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
            onSubmitEditing={handleSubmit}
          />
        </View>
        <styled.ContainerButton>
          <Text color={colors.white[100]}>Esqueceu sua senha?</Text>
          <Button
            variant="primary"
            disabled={!isFormValid}
            loading={isSubmitting}
            onPress={handleSubmit}
          >
            Fazer login
          </Button>

          <View style={{ flexDirection: 'row' }}>
            <Text color={colors.white[100]}>Ainda não tem uma conta? </Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Text color={colors.green[400]} weight="700">
                Crie uma agora
              </Text>
            </TouchableOpacity>
          </View>
        </styled.ContainerButton>
      </ScrollView>
    </styled.Login>
  );
}
