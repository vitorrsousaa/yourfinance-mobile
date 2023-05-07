import { View } from 'react-native';

import Header from '../../../../components/Header';
import ContainerInformation from '../../components/ContainerInformation';
import ContinuousButton from '../../components/ContinuousButton';

import CheckBoxForm from './components/CheckBoxForm';
import { CreateGoalTimeViewProps } from './CreateGoalTime';
import * as styled from './CreateGoalTime.styles';
import { CreateGoalTimeViewModelProps } from './CreateGoalTime.view-model';

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
          title="Em quanto tempo você deseja encher o potinho?"
          subtitle="Defina um prazo realista e alcançável para encher o seu potinho. O prazo é crucial para o sucesso!"
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
