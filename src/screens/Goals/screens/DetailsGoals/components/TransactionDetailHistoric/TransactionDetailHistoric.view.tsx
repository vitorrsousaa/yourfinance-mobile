import { TransactionDetailHistoricViewModelProps } from './TransactionDetailHistoric.view-model';
import { TransactionDetailHistoricViewProps } from './TransactionDetailHistoric';
import * as styled from './TransactionDetailHistoric.styles';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Text } from '../../../../../../components/Text';
import { formatDate } from '../../../../../../utils/formatDate';
import formatAmount from '../../../../../../utils/formatAmout';

interface Props {
  viewModel: TransactionDetailHistoricViewModelProps;
  props: TransactionDetailHistoricViewProps;
}

export function TransactionDetailHistoricView({ viewModel, props }: Props) {
  const { transaction } = props;

  const { date, amount, modeTransaction } = transaction;

  const { colors } = useTheme();

  return (
    <styled.TransactionDetailHistoric>
      <View style={{ gap: 4 }}>
        <Text color={colors.black[600]} weight="500" size={16}>
          {formatDate(date)}
        </Text>
        <Text weight="500" size={14}>
          {modeTransaction === 'MORE' ? 'Aplicação' : 'Resgate'}
        </Text>
      </View>
      <Text
        weight="500"
        size={16}
        color={modeTransaction === 'MORE' ? colors.green[500] : colors.red[400]}
      >
        {formatAmount(amount)}
      </Text>
    </styled.TransactionDetailHistoric>
  );
}
