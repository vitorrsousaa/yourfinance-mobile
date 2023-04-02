import { TransactionViewModelProps } from './Transaction.view-model';
import { TransactionViewProps } from './Transaction';
import * as styled from './Transaction.styles';
import { View } from 'react-native';
import formatAmount from '../../../../utils/formatAmout';
import { Text } from '../../../Text';
import { useTheme } from 'styled-components/native';
import { Income } from '../../../Icons/Income';
import { Outcome } from '../../../Icons/Outcome';
import { formatDate } from '../../../../utils/formatDate';

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

  const icon = category.name === 'Receitas' ? <Income /> : <Outcome />;

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
