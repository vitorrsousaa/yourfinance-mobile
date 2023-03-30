import { TransactionViewModelProps } from './Transaction.view-model';
import { TransactionViewProps } from './Transaction';
import * as styled from './Transaction.styles';
import { Text, View } from 'react-native';
import formatAmount from '../../../../utils/formatAmout';

interface Props {
  viewModel: TransactionViewModelProps;
  props: TransactionViewProps;
}

export function TransactionView({ viewModel, props }: Props) {
  const { ...transactionProps } = props;

  return (
    <styled.Transaction>
      <View>
        <Text>Category</Text>
        <Text>Description</Text>
        <Text>Date</Text>
      </View>
      <Text>{formatAmount(123)}</Text>
    </styled.Transaction>
  );
}
