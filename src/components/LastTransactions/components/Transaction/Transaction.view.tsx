import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import formatAmount from '../../../../utils/formatAmout';
import { formatDate } from '../../../../utils/formatDate';
import Icon from '../../../Icons';
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

  const { colors } = useTheme();

  const { category, description, date, amount, modality } = data;

  const color =
    category.name === 'Receitas' ? colors.green[400] : colors.red[400];

  const icon =
    category.name === 'Receitas' ? (
      <Icon name="income" />
    ) : (
      <Icon name="outcome" />
    );

  return (
    <styled.Transaction>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        {icon}
        <View>
          <Text weight="500" color={colors.black[900]} size={14}>
            {category.name}
          </Text>
          <Text color={colors.black[600]}>{description}</Text>
          <Text color={colors.black[600]}>{formatDate(date)}</Text>
        </View>
      </View>
      <Text weight="500" color={color}>
        {formatAmount(amount)}
      </Text>
    </styled.Transaction>
  );
}
