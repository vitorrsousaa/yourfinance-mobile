import { GoalsViewModelProps } from './Goals.view-model';
import { GoalsViewProps } from './Goals';
import * as styled from './Goals.styles';
import { Text, View } from 'react-native';
import LastGoals from './components/LastGoals';

interface Props {
  viewModel: GoalsViewModelProps;
  props: GoalsViewProps;
}

export function GoalsView({ viewModel, props }: Props) {
  const { ...goalsProps } = props;

  return (
    <styled.Goals>
      <View>
        <Text>go back</Text>
        <Text>Metas</Text>
        <Text>search</Text>
      </View>
      <LastGoals />
    </styled.Goals>
  );
}
