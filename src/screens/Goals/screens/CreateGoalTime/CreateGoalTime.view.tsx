import { CreateGoalTimeViewModelProps } from './CreateGoalTime.view-model';
import { CreateGoalTimeViewProps } from './CreateGoalTime';
import * as styled from './CreateGoalTime.styles';
import Touchable from '../../../../components/Touchable';
import { ScrollView } from 'react-native-gesture-handler';
import ContainerInformation from '../../components/ContainerInformation';
import { Text } from '../../../../components/Text';
import { View } from 'react-native';
import ContinuousButton from '../../components/ContinuousButton';
import CheckBoxForm from './components/CheckBoxForm';

interface Props {
  viewModel: CreateGoalTimeViewModelProps;
  props: CreateGoalTimeViewProps;
}

export function CreateGoalTimeView({ viewModel, props }: Props) {
  const { ...createGoalTimeProps } = props;

  const { month, checkForm, goBack, handleCreateGoal, handleChangeMonth } =
    viewModel;

  return (
    <styled.CreateGoalTime>
      <styled.Header>
        <Touchable item="arrow" onPress={goBack} />
      </styled.Header>

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

      <ContinuousButton isValid={true} onPress={handleCreateGoal} />
    </styled.CreateGoalTime>
  );
}
