import { LastGoalsViewModelProps } from './LastGoals.view-model';
import { LastGoalsViewProps } from './LastGoals';
import * as styled from './LastGoals.styles';
import { View } from 'react-native';
import GoalCard from './components/GoalCard';
import Loader from '../../../../components/Loader';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';
import { ErrorContent } from '../../../../components/Illustrations/ErrorContent';
import { Text } from '../../../../components/Text';
import { NoData } from '../../../../components/Illustrations/NoData';

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
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
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
