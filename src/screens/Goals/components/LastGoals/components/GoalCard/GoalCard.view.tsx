import { useMemo } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import Icon from '../../../../../../components/Icons';
import { Text } from '../../../../../../components/Text';
import formatAmount from '../../../../../../utils/formatAmout';
import { formatDate } from '../../../../../../utils/formatDate';
import ProgressBar from '../../../ProgressBar';

import { GoalCardViewProps } from './GoalCard';
import * as styled from './GoalCard.styles';
import { GoalCardViewModelProps } from './GoalCard.view-model';

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
          <Icon name="target" color={colors.black[900]} />
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
          onPress={handleNavigateToDetailsGoals}
        >
          <Icon name="dotMenu" />
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
