import { LastTransactionsViewModelProps } from './LastTransactions.view-model';
import { LastTransactionsViewProps } from './LastTransactions';
import * as styled from './LastTransactions.styles';
import { Text, View } from 'react-native';

interface Props {
  viewModel: LastTransactionsViewModelProps;
  props: LastTransactionsViewProps;
}

export function LastTransactionsView({ viewModel, props }: Props) {
  const { title = 'Últimas transações', showFilter } = props;

  return (
    <styled.LastTransactions>
      <View>
        <Text>{title}</Text>

        {showFilter && <Text>Filtro</Text>}
      </View>
    </styled.LastTransactions>
  );
}
