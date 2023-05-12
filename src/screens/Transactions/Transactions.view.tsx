import { View } from 'react-native';

import Header from '../../components/Header';
import LastTransactions from '../../components/LastTransactions';
import Touchable from '../../components/Touchable';
import { useTransactions } from '../../hooks/useTransactions';

import { TransactionsViewProps } from './Transactions';
import * as styled from './Transactions.styles';
import { TransactionsViewModelProps } from './Transactions.view-model';

interface Props {
  viewModel: TransactionsViewModelProps;
  props: TransactionsViewProps;
}

export function TransactionsView({ viewModel, props }: Props) {
  const { ...transactionsProps } = props;

  const { handleNavigateToCreateTransaction } = viewModel;

  const { transactions, isErrorTransactions, isLoadingTransactions } =
    useTransactions();

  return (
    <styled.Transactions>
      <Header
        title="Transações"
        rightIcon={
          <styled.ContainerRightIcons>
            <Touchable item="search" />
            <Touchable
              item="plus"
              onPress={handleNavigateToCreateTransaction}
            />
          </styled.ContainerRightIcons>
        }
      />

      <styled.ContainerTransactions>
        <LastTransactions
          title="Histórico de transações"
          showFilter={true}
          transactions={transactions}
          isLoading={isLoadingTransactions}
          hasError={isErrorTransactions}
        />
      </styled.ContainerTransactions>
    </styled.Transactions>
  );
}
