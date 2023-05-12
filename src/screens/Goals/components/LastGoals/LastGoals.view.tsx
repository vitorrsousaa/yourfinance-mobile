import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import { ErrorContent } from '../../../../components/Illustrations/ErrorContent';
import { NoData } from '../../../../components/Illustrations/NoData';
import Loader from '../../../../components/Loader';
import { Text } from '../../../../components/Text';

import GoalCard from './components/GoalCard';
import { LastGoalsViewProps } from './LastGoals';
import * as styled from './LastGoals.styles';
import { LastGoalsViewModelProps } from './LastGoals.view-model';

interface Props {
  viewModel: LastGoalsViewModelProps;
  props: LastGoalsViewProps;
}

export function LastGoalsView({ viewModel, props }: Props) {
  const { goals, hasError, isLoading } = props;

  const { colors } = useTheme();

  return (
    <styled.LastGoals>
      {hasError ? (
        <View
          style={{
            alignItems: 'center',
            gap: 16,
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <ErrorContent />
          <Text style={{ textAlign: 'center' }}>
            Tivemos um erro para encontrar suas transações. Tente novamente mais
            tarde.
          </Text>
        </View>
      ) : isLoading ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <Loader size="large" color={colors.green[400]} />
        </View>
      ) : goals.length > 0 ? (
        <View>
          <FlatList
            data={goals}
            renderItem={({ item }) => <GoalCard goal={item} />}
            keyExtractor={(item) => item._id}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          />
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center',
            gap: 16,
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <NoData />
          <Text>Você ainda não cadastrou suas metas.</Text>
        </View>
      )}
    </styled.LastGoals>
  );
}
