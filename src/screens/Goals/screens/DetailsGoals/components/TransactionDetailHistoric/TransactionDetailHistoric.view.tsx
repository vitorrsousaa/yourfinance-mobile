import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Text } from '../../../../../../components/Text';
import formatAmount from '../../../../../../utils/formatAmout';

import { TransactionDetailHistoricViewProps } from './TransactionDetailHistoric';
import * as styled from './TransactionDetailHistoric.styles';
import { TransactionDetailHistoricViewModelProps } from './TransactionDetailHistoric.view-model';

interface Props {
  viewModel: TransactionDetailHistoricViewModelProps;
  props: TransactionDetailHistoricViewProps;
}

export function TransactionDetailHistoricView({ viewModel, props }: Props) {
  const { transaction } = props;

  const { date, amount, mode } = transaction;

  const { colors } = useTheme();

  return (
    <styled.TransactionDetailHistoric>
      <View style={{ gap: 4 }}>
        <Text color={colors.black[600]} weight="500" size={16}>
          {date}
        </Text>
        <Text weight="500" size={14}>
          {mode === 'MORE' ? 'Aplicação' : 'Resgate'}
        </Text>
      </View>
      <Text
        weight="500"
        size={16}
        color={mode === 'MORE' ? colors.green[500] : colors.red[400]}
      >
        {formatAmount(amount)}
      </Text>
    </styled.TransactionDetailHistoric>
  );
}
