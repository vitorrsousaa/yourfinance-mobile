import { CreateGoalTimeViewModelProps } from './CreateGoalTime.view-model';
import { CreateGoalTimeViewProps } from './CreateGoalTime';
import * as styled from './CreateGoalTime.styles';

import ContainerInformation from '../../components/ContainerInformation';
import { View } from 'react-native';
import ContinuousButton from '../../components/ContinuousButton';
import CheckBoxForm from './components/CheckBoxForm';
import Header from '../../../../components/Header';

interface Props {
  viewModel: CreateGoalTimeViewModelProps;
  props: CreateGoalTimeViewProps;
}

export function CreateGoalTimeView({ viewModel, props }: Props) {
  const { ...createGoalTimeProps } = props;

  const {
    month,
    checkForm,
    isValid,
    goBack,
    handleNavigateToCreateGoalDetails,
    handleChangeMonth,
  } = viewModel;

  return (
    <styled.CreateGoalTime>
      <Header onPressLeftIcon={goBack} title="Adicionando uma meta" />

      <View style={{ padding: 32 }}>
        <ContainerInformation
          title="Em quanto tempo você quer atingir essa meta?"
          subtitle="O prazo para definição de uma meta é muito importante. Ele deve ser realista e alcançavel."
        >
          <CheckBoxForm
            data={checkForm}
            onChange={handleChangeMonth}
            selected={month}
          />
        </ContainerInformation>
      </View>

      <ContinuousButton
        isValid={isValid}
        onPress={handleNavigateToCreateGoalDetails}
      />
    </styled.CreateGoalTime>
  );
}
