import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import Icon from '../../components/Icons';
import LastTransactions from '../../components/LastTransactions';
import Loader from '../../components/Loader';
import PlusButton from '../../components/PlusButton';
import { Text } from '../../components/Text';
import Touchable from '../../components/Touchable';
import { useAuth } from '../../hooks/useAuth';
import { useTransactions } from '../../hooks/useTransactions';

import CategorySummary from './components/CategorySummary';
import { HomeViewProps } from './Home';
import * as styled from './Home.styles';
import { HomeViewModelProps } from './Home.view-model';

interface Props {
  viewModel: HomeViewModelProps;
  props: HomeViewProps;
}

export function HomeView({ viewModel, props }: Props) {
  const { ...homeProps } = props;

  const {
    summaries,
    isLoading,
    handleNavigateSettings,
    handleNavigateNotifications,
    handleNavigateCreateTransaction,
    getDifference,
  } = viewModel;

  const { auth } = useAuth();
  const { user } = auth;

  const { isLoadingTransactions, isErrorTransactions, transactions } =
    useTransactions();

  const { colors } = useTheme();

  return (
    <styled.Home {...homeProps}>
      <styled.Container>
        <styled.ContainerHeader>
          <Icon name="logo" />

          <styled.ContainerButtons>
            <Touchable
              item="bell"
              style={{ marginRight: 8 }}
              onPress={handleNavigateNotifications}
            />
            <Touchable
              item="user"
              background="white"
              onPress={handleNavigateSettings}
            />
          </styled.ContainerButtons>
        </styled.ContainerHeader>
        <styled.ContainerHero>
          <Text size={24} color={colors.white[100]}>
            Olá,
            <Text weight="700" size={24} color={colors.white[100]}>
              {` ${user.name}`}
            </Text>
          </Text>

          {!isLoading && (
            <View>
              <Text color={colors.black[200]}>Saldo disponível</Text>
              <Text weight="500" size={28} color={colors.white[100]}>
                {getDifference()}
              </Text>
            </View>
          )}

          <styled.ContainerSummary>
            {isLoading ? (
              <Loader size={'large'} color={colors.green[400]} />
            ) : (
              <>
                {summaries.map((summary) => (
                  <CategorySummary
                    key={summary.currentMonth}
                    categoryName={summary.category}
                    currentMonth={summary.currentMonth}
                    percent={summary.percent}
                    difference={summary.difference}
                  />
                ))}
              </>
            )}
          </styled.ContainerSummary>
        </styled.ContainerHero>
      </styled.Container>
      <styled.ContainerTransactions>
        <LastTransactions
          transactions={transactions?.slice(0, 4)}
          isLoading={isLoadingTransactions}
          hasError={isErrorTransactions}
        />
      </styled.ContainerTransactions>

      <PlusButton onPress={handleNavigateCreateTransaction} />
    </styled.Home>
  );
}
