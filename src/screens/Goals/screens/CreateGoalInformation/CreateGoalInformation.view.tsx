import { KeyboardAvoidingView, ScrollView, View } from 'react-native';

import Header from '../../../../components/Header';
import InputOutlined from '../../../../components/InputOutlined';
import formatAmount from '../../../../utils/formatAmout';
import { isAndroid } from '../../../../utils/isAndroid';
import ContainerInformation from '../../components/ContainerInformation';
import ContinuousButton from '../../components/ContinuousButton';

import { CreateGoalInformationViewProps } from './CreateGoalInformation';
import * as styled from './CreateGoalInformation.styles';
import { CreateGoalInformationViewModelProps } from './CreateGoalInformation.view-model';

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
        <Header title={'Adicionando uma meta'} onPressLeftIcon={goBack} />

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
                error={getErrorMessageByFieldName('initialValue')}
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
