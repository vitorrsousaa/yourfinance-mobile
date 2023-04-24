import { TransactionsViewModelProps } from './Transactions.view-model';
import { TransactionsViewProps } from './Transactions';
import * as styled from './Transactions.styles';
import LastTransactions from '../../components/LastTransactions';
import Touchable from '../../components/Touchable';
import { useTransactions } from '../../hooks/useTransactions';
import Header from '../../components/Header';

interface Props {
  viewModel: TransactionsViewModelProps;
  props: TransactionsViewProps;
}

export function TransactionsView({ viewModel, props }: Props) {
  const { ...transactionsProps } = props;

  const { transactions, isErrorTransactions, isLoadingTransactions } =
    useTransactions();

  return (
    <styled.Transactions>
      <Header title="Transações" rightIcon={<Touchable item="search" />} />

      <styled.ContainerTransactions>
        <LastTransactions
          title="Transações"
          showFilter={true}
          transactions={transactions}
          isLoading={isLoadingTransactions}
          hasError={isErrorTransactions}
        />
      </styled.ContainerTransactions>
    </styled.Transactions>
  );
}
