import { LastGoalsViewModelProps } from './LastGoals.view-model';
import { LastGoalsViewProps } from './LastGoals';
import * as styled from './LastGoals.styles';
import { Text, View } from 'react-native';
import GoalCard from './components/GoalCard';

interface Props {
  viewModel: LastGoalsViewModelProps;
  props: LastGoalsViewProps;
}

export function LastGoalsView({ viewModel, props }: Props) {
  const { ...lastGoalsProps } = props;

  return (
    <styled.LastGoals>
      <View>
        <Text>Suas metas</Text>
        <Text>Filtro</Text>
      </View>
      <GoalCard />
    </styled.LastGoals>
  );
}
