import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import formatAmount from '../../../../utils/formatAmout';
import { formatShortDate } from '../../../../utils/formatDate';
import { Text } from '../../../Text';

import { TransactionViewProps } from './Transaction';
import * as styled from './Transaction.styles';
import { TransactionViewModelProps } from './Transaction.view-model';

interface Props {
  viewModel: TransactionViewModelProps;
  props: TransactionViewProps;
}

export function TransactionView({ viewModel, props }: Props) {
  const { data, ...transactionProps } = props;

  const { getColor, getIcon } = viewModel;

  const { colors } = useTheme();

  const { category, description, date, amount, modality } = data;

  return (
    <styled.Transaction {...transactionProps}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        {getIcon(category.name)}
        <View>
          <Text weight="500" color={colors.black[900]} size={14}>
            {description}
          </Text>
          <Text color={colors.black[600]}>{modality.name}</Text>
          <Text color={colors.black[600]}>{formatShortDate(date)}</Text>
        </View>
      </View>
      <Text weight="500" color={getColor(category.name)}>
        {formatAmount(amount)}
      </Text>
    </styled.Transaction>
  );
}
