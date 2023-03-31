import { LastTransactionsViewModelProps } from './LastTransactions.view-model';
import { LastTransactionsViewProps } from './LastTransactions';
import * as styled from './LastTransactions.styles';
import { Text } from '../Text';
import { useTheme } from 'styled-components/native';
import Transaction from './components/Transaction';
import { Filter } from '../Icons/Filter';

interface Props {
  viewModel: LastTransactionsViewModelProps;
  props: LastTransactionsViewProps;
}

export function LastTransactionsView({ viewModel, props }: Props) {
  const { title = 'Últimas transações', showFilter } = props;
  const theme = useTheme();

  return (
    <styled.LastTransactions>
      <styled.ContainerHeader showFilter={showFilter}>
        <Text weight="500" color={theme.colors.black[900]} size={17}>
          {title}
        </Text>

        {showFilter && (
          <styled.Filter activeOpacity={0.6}>
            <Text>Filtro</Text>
            <Filter />
          </styled.Filter>
        )}
      </styled.ContainerHeader>

      <Transaction />
    </styled.LastTransactions>
  );
}
