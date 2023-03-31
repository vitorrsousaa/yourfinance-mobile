import { LastTransactionsViewModelProps } from './LastTransactions.view-model';
import { LastTransactionsViewProps } from './LastTransactions';
import * as styled from './LastTransactions.styles';
import { View } from 'react-native';
import { Text } from '../Text';
import { useTheme } from 'styled-components/native';
import Transaction from './components/Transaction';

interface Props {
  viewModel: LastTransactionsViewModelProps;
  props: LastTransactionsViewProps;
}

export function LastTransactionsView({ viewModel, props }: Props) {
  const { title = 'Últimas transações', showFilter } = props;
  const theme = useTheme();

  return (
    <styled.LastTransactions>
      <View>
        <Text weight="500" color={theme.colors.black[900]} size={17}>
          {title}
        </Text>

        {showFilter && <Text>Filtro</Text>}
      </View>

      <Transaction />
    </styled.LastTransactions>
  );
}
