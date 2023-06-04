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

  const {
    handleNavigateToCreateTransaction,
    handleNavigateToDetailsTransaction,
  } = viewModel;

  const { transactions, isErrorTransactions, isLoadingTransactions } =
    useTransactions();

  return (
    <styled.Transactions {...transactionsProps}>
      <Header
        title="Transações"
        leftIcon={false}
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
          onSelected={handleNavigateToDetailsTransaction}
        />
      </styled.ContainerTransactions>
    </styled.Transactions>
  );
}
