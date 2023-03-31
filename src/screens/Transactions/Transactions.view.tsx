import { TransactionsViewModelProps } from './Transactions.view-model';
import { TransactionsViewProps } from './Transactions';
import * as styled from './Transactions.styles';
import { Text, View } from 'react-native';
import LastTransactions from '../../components/LastTransactions';

interface Props {
  viewModel: TransactionsViewModelProps;
  props: TransactionsViewProps;
}

export function TransactionsView({ viewModel, props }: Props) {
  const { ...transactionsProps } = props;

  return (
    <styled.Transactions>
      <View>
        <Text>Go back</Text>
        <Text>Transações</Text>
        <Text>Search</Text>
      </View>
      <LastTransactions title="Transações" showFilter={true} />
    </styled.Transactions>
  );
}
