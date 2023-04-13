import { CreateGoalTimeViewModelProps } from './CreateGoalTime.view-model';
import { CreateGoalTimeViewProps } from './CreateGoalTime';
import * as styled from './CreateGoalTime.styles';
import Touchable from '../../../../components/Touchable';
import { ScrollView } from 'react-native-gesture-handler';
import ContainerInformation from '../../components/ContainerInformation';
import { Text } from '../../../../components/Text';
import { View } from 'react-native';
import ContinuousButton from '../../components/ContinuousButton';

interface Props {
  viewModel: CreateGoalTimeViewModelProps;
  props: CreateGoalTimeViewProps;
}

export function CreateGoalTimeView({ viewModel, props }: Props) {
  const { ...createGoalTimeProps } = props;

  const { goBack, handleCreateGoal } = viewModel;

  return (
    <styled.CreateGoalTime>
      <styled.Header>
        <Touchable item="arrow" onPress={goBack} />
      </styled.Header>

      <ScrollView>
        <View style={{ padding: 24 }}>
          <ContainerInformation
            title="Em quanto tempo você quer atingir essa meta?"
            subtitle="O prazo para definição de uma meta é muito importante. Ele deve ser realista e alcançavel."
          >
            <Text>Radio button</Text>
          </ContainerInformation>
        </View>
      </ScrollView>

      <ContinuousButton isValid={true} onPress={handleCreateGoal} />
    </styled.CreateGoalTime>
  );
}
