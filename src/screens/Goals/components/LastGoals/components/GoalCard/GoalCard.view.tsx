import { GoalCardViewModelProps } from './GoalCard.view-model';
import { GoalCardViewProps } from './GoalCard';
import * as styled from './GoalCard.styles';
import { View } from 'react-native';
import formatAmount from '../../../../../../utils/formatAmout';
import { Target } from '../../../../../../components/Icons/Target';
import { useTheme } from 'styled-components/native';
import { Text } from '../../../../../../components/Text';
import { DotMenu } from '../../../../../../components/Icons/DotMenu';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProgressBar from '../../../ProgressBar';
import { formatDate } from '../../../../../../utils/formatDate';
import { useMemo } from 'react';

interface Props {
  viewModel: GoalCardViewModelProps;
  props: GoalCardViewProps;
}

export function GoalCardView({ viewModel, props }: Props) {
  const { goal } = props;

  const { goalName, goalTime, balance, payOff, goalCost } = goal;

  const progress = useMemo(() => {
    return (balance / goalCost) * 100;
  }, [goal._id]);

  const { handleNavigateToDetailsGoals } = viewModel;

  const { colors } = useTheme();

  return (
    <styled.GoalCard>
      <styled.GoalHeader>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Target color={colors.black[900]} />
          <View>
            <Text weight="500" size={16} color={colors.black[800]}>
              {goalName}
            </Text>
            <Text weight="500" size={12} color={colors.black[500]}>
              {formatDate(goalTime.initialDate)}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => handleNavigateToDetailsGoals(goal)}
        >
          <DotMenu />
        </TouchableOpacity>
      </styled.GoalHeader>

      <styled.GoalTargets>
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <Text weight="500" size={12} color={colors.black[800]}>
            {formatAmount(balance)}
          </Text>
          <Text weight="500" size={12} color={colors.black[500]}>
            de {formatAmount(goalCost)}
          </Text>
        </View>
        <Text weight="500" size={12} color={colors.black[500]}>
          {formatAmount(payOff)}
        </Text>
      </styled.GoalTargets>

      <ProgressBar progress={progress} />
    </styled.GoalCard>
  );
}
