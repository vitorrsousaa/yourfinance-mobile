import { LastTransactionsViewModelProps } from './LastTransactions.view-model';
import { LastTransactionsViewProps } from './LastTransactions';
import * as styled from './LastTransactions.styles';
import { Text } from '../Text';
import { useTheme } from 'styled-components/native';
import Transaction from './components/Transaction';
import { FlatList, View } from 'react-native';
import Loader from '../Loader';
import { NoData } from '../Illustrations/NoData';
import { ErrorContent } from '../Illustrations/ErrorContent';
import Icon from '../Icons';

interface Props {
  viewModel: LastTransactionsViewModelProps;
  props: LastTransactionsViewProps;
}

export function LastTransactionsView({ viewModel, props }: Props) {
  const { title, showFilter, transactions, isLoading, hasError } = props;

  const { colors } = useTheme();

  return (
    <styled.LastTransactions>
      {hasError ? (
        <View
          style={{ marginTop: 16, alignItems: 'center', gap: 16 }}
          testID="data-error-content"
        >
          <ErrorContent />
          <Text style={{ textAlign: 'center' }}>
            Tivemos um erro para encontrar suas transações. Tente novamente mais
            tarde.
          </Text>
        </View>
      ) : (
        <>
          <styled.ContainerHeader showFilter={showFilter}>
            <Text weight="500" color={colors.black[900]} size={17}>
              {title}
            </Text>

            {showFilter && (
              <styled.Filter activeOpacity={0.6} testID="data-filter">
                <Text>Filtro</Text>
                <Icon name="filter" />
              </styled.Filter>
            )}
          </styled.ContainerHeader>
          {isLoading ? (
            <Loader size="large" color={colors.green[400]} />
          ) : transactions.length > 0 ? (
            <View style={{ gap: 16 }}>
              <FlatList
                data={transactions}
                renderItem={({ item }) => <Transaction data={item} />}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                contentContainerStyle={{ paddingBottom: 48 }}
              />
            </View>
          ) : (
            <View
              style={{ marginTop: 16, alignItems: 'center', gap: 16 }}
              testID="data-without-transactions"
            >
              <NoData />
              <Text>Você ainda não cadastrou transações.</Text>
            </View>
          )}
        </>
      )}
    </styled.LastTransactions>
  );
}
