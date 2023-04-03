import { TransactionsViewModelProps } from './Transactions.view-model';
import { TransactionsViewProps } from './Transactions';
import * as styled from './Transactions.styles';
import LastTransactions from '../../components/LastTransactions';
import { Text } from '../../components/Text';
import { useTheme } from 'styled-components/native';
import Touchable from '../../components/Touchable';

interface Props {
  viewModel: TransactionsViewModelProps;
  props: TransactionsViewProps;
}

export function TransactionsView({ viewModel, props }: Props) {
  const { transactions, ...transactionsProps } = props;

  const { colors } = useTheme();

  console.log(transactions);

  return (
    <styled.Transactions>
      <styled.ContainerHeader>
        <Text weight="500" size={18} color={colors.white[100]}>
          Transações
        </Text>
        <Touchable item="search" />
      </styled.ContainerHeader>
      <styled.ContainerTransactions>
        <LastTransactions
          title="Transações"
          showFilter={true}
          transactions={transactions}
        />
      </styled.ContainerTransactions>
    </styled.Transactions>
  );
}
