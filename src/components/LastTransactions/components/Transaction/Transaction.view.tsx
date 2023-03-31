import { TransactionViewModelProps } from './Transaction.view-model';
import { TransactionViewProps } from './Transaction';
import * as styled from './Transaction.styles';
import { View } from 'react-native';
import formatAmount from '../../../../utils/formatAmout';
import { Text } from '../../../Text';
import { useTheme } from 'styled-components/native';
import { Income } from '../../../Icons/Income';
import { Outcome } from '../../../Icons/Outcome';

interface Props {
  viewModel: TransactionViewModelProps;
  props: TransactionViewProps;
}

export function TransactionView({ viewModel, props }: Props) {
  const { ...transactionProps } = props;
  const theme = useTheme();

  return (
    <styled.Transaction>
      <View>
        <Text weight="500" color={theme.colors.black[900]} size={14}>
          Category
        </Text>
        <Text color={theme.colors.black[600]}>Description</Text>
        <Text color={theme.colors.black[600]}>Date</Text>
      </View>
      <Text weight="500" color={theme.colors.red[400]}>
        {formatAmount(123)}
      </Text>
    </styled.Transaction>
  );
}
