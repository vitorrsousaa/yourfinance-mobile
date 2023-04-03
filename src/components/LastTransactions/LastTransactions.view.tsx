import { LastTransactionsViewModelProps } from './LastTransactions.view-model';
import { LastTransactionsViewProps } from './LastTransactions';
import * as styled from './LastTransactions.styles';
import { Text } from '../Text';
import { useTheme } from 'styled-components/native';
import Transaction from './components/Transaction';
import { Filter } from '../Icons/Filter';
import { FlatList, View } from 'react-native';

interface Props {
  viewModel: LastTransactionsViewModelProps;
  props: LastTransactionsViewProps;
}

export function LastTransactionsView({ viewModel, props }: Props) {
  const { title = 'Últimas transações', showFilter, transactions } = props;
  const theme = useTheme();

  return (
    <styled.LastTransactions>
      <styled.ContainerHeader showFilter={showFilter}>
        <Text weight="500" color={theme.colors.black[900]} size={17}>
          {title}
        </Text>

        {showFilter && (
          <styled.Filter activeOpacity={0.6}>
            <Text>Filtro</Text>
            <Filter />
          </styled.Filter>
        )}
      </styled.ContainerHeader>
      <View style={{ gap: 16 }}>
        <FlatList
          data={transactions}
          renderItem={({ item }) => <Transaction data={item} />}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          contentContainerStyle={{ paddingBottom: 96 }}
        />
      </View>
    </styled.LastTransactions>
  );
}
