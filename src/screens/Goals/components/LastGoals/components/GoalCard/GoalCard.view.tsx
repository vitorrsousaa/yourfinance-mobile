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

interface Props {
  viewModel: GoalCardViewModelProps;
  props: GoalCardViewProps;
}

export function GoalCardView({ viewModel, props }: Props) {
  const { goal, ...goalCardProps } = props;

  const { handleNavigateToDetailsGoals } = viewModel;

  const { colors } = useTheme();

  return (
    <styled.GoalCard>
      <styled.GoalHeader>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Target color={colors.black[900]} />
          <View>
            <Text weight="500" size={16} color={colors.black[800]}>
              Nome da meta
            </Text>
            <Text weight="500" size={12} color={colors.black[500]}>
              17/02/2023
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handleNavigateToDetailsGoals}
        >
          <DotMenu />
        </TouchableOpacity>
      </styled.GoalHeader>

      <styled.GoalTargets>
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <Text weight="500" size={12} color={colors.black[800]}>
            {formatAmount(500)}
          </Text>
          <Text weight="500" size={12} color={colors.black[500]}>
            de {formatAmount(1500)}
          </Text>
        </View>
        <Text weight="500" size={12} color={colors.black[500]}>
          {formatAmount(1000)}
        </Text>
      </styled.GoalTargets>
      <View
        style={{
          width: '100%',
          height: 8,
          borderRadius: 8,
          backgroundColor: colors.black[200],
        }}
      >
        <View
          style={{
            width: '70%',
            height: 8,
            borderRadius: 8,
            backgroundColor: colors.green[400],
          }}
        />
      </View>
    </styled.GoalCard>
  );
}
