import { CreateGoalInformationViewModelProps } from './CreateGoalInformation.view-model';
import { CreateGoalInformationViewProps } from './CreateGoalInformation';
import * as styled from './CreateGoalInformation.styles';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';

import ContainerInformation from '../../components/ContainerInformation';
import InputOutlined from '../../../../components/InputOutlined';
import { isAndroid } from '../../../../utils/isAndroid';
import ContinuousButton from '../../components/ContinuousButton';
import formatAmount from '../../../../utils/formatAmout';
import Header from '../../../../components/Header';

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
        <Header title={'Crie o potinho'} onPressLeftIcon={goBack} />

        <ScrollView>
          <View style={{ padding: 24 }}>
            <ContainerInformation
              title="De um nome especial para o potinho"
              subtitle="O nome do seu potinho deve ser algo que te inspire e lembre o seu objetivo financeiro!"
            >
              <View>
                <InputOutlined
                  placeholder="Nome do potinho"
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
              title="Quanto você deseja guardar no potinho?"
              subtitle="Defina o valor mensal para o potinho. Mas lembre-se, escolha um valor realista para a sua vida atual."
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
              title="Quanto você deseja guardar agora?"
              subtitle="Caso queira cadastrar seu potinho com um valor inicial, aproveite essa oportunidade!"
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
