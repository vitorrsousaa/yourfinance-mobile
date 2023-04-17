import { CreateGoalInformationViewModelProps } from './CreateGoalInformation.view-model';
import { CreateGoalInformationViewProps } from './CreateGoalInformation';
import * as styled from './CreateGoalInformation.styles';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import Touchable from '../../../../components/Touchable';

import ContainerInformation from '../../components/ContainerInformation';
import InputOutlined from '../../../../components/InputOutlined';
import { isAndroid } from '../../../../utils/isAndroid';
import ContinuousButton from '../../components/ContinuousButton';
import formatAmount from '../../../../utils/formatAmout';

interface Props {
  viewModel: CreateGoalInformationViewModelProps;
  props: CreateGoalInformationViewProps;
}

export function CreateGoalInformationView({ viewModel, props }: Props) {
  const { ...createGoalInformationProps } = props;

  const {
    name,
    initialValue,
    goalCost,
    isFormValid,
    handleGoalCostChange,
    handleInitialValueGoalChange,
    handleNameGoalChange,
    handleNavigateToCreateGoalTime,
    getErrorMessageByFieldName,
    goBack,
  } = viewModel;

  return (
    <styled.CreateGoalInformation>
      <KeyboardAvoidingView behavior={isAndroid ? 'height' : 'padding'}>
        <styled.Header>
          <Touchable item="arrow" onPress={goBack} />
        </styled.Header>

        <ScrollView>
          <View style={{ padding: 24 }}>
            <ContainerInformation
              title="Crie um nome para sua meta"
              subtitle="O nome da sua meta deve ser algo que te ajude a lembrar o seu objetivo."
            >
              <View>
                <InputOutlined
                  placeholder="Nome da sua meta"
                  autoCorrect={false}
                  returnKeyType="next"
                  value={name}
                  onChangeText={handleNameGoalChange}
                  error={getErrorMessageByFieldName('name')}
                  maxLength={18}
                />
              </View>
            </ContainerInformation>

            <ContainerInformation
              title="Quanto você quer guardar para sua meta?"
              subtitle="Defina o valor por mês para a sua meta. Mas lembre-se, precisa ser um valor realista para a sua vida atual."
            >
              <InputOutlined
                placeholder="R$ 0,00"
                autoCorrect={false}
                keyboardType="number-pad"
                autoCapitalize="none"
                returnKeyType="next"
                value={formatAmount(goalCost)}
                onChangeText={handleGoalCostChange}
                error={getErrorMessageByFieldName('goalCost')}
              />
            </ContainerInformation>

            <ContainerInformation
              title="Quanto você quer guardar agora?"
              subtitle="Caso você queira cadastrar sua meta com um valor inicial, agora é o momento."
            >
              <InputOutlined
                placeholder="R$ 0,00"
                autoCorrect={false}
                keyboardType="number-pad"
                autoCapitalize="none"
                returnKeyType="go"
                value={formatAmount(initialValue)}
                onChangeText={handleInitialValueGoalChange}
              />
            </ContainerInformation>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <ContinuousButton
        isValid={isFormValid}
        onPress={handleNavigateToCreateGoalTime}
      />
    </styled.CreateGoalInformation>
  );
}
