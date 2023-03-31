import { GoalCardViewModelProps } from './GoalCard.view-model';
import { GoalCardViewProps } from './GoalCard';
import * as styled from './GoalCard.styles';
import { Text, View } from 'react-native';
import formatAmount from '../../../../../../utils/formatAmout';

interface Props {
  viewModel: GoalCardViewModelProps;
  props: GoalCardViewProps;
}

export function GoalCardView({ viewModel, props }: Props) {
  const { ...goalCardProps } = props;

  return (
    <styled.GoalCard>
      <View>
        <View>
          <Text>Nome da meta</Text>
          <Text>17/02/2023</Text>
        </View>
        <Text>Menu</Text>
      </View>
      <View>
        <View>
          <Text>{formatAmount(500)}</Text>
          <Text>de {formatAmount(1500)}</Text>
        </View>
        <Text>{formatAmount(1000)}</Text>
      </View>
      <Text>progress bar</Text>
    </styled.GoalCard>
  );
}
