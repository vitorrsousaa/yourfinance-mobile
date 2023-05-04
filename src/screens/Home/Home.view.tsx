import { HomeViewModelProps } from './Home.view-model';
import { HomeViewProps } from './Home';
import * as styled from './Home.styles';
import { View } from 'react-native';
import CategorySummary from './components/CategorySummary';
import { Text } from '../../components/Text';
import { useTheme } from 'styled-components/native';
import formatAmount from '../../utils/formatAmout';
import LastTransactions from '../../components/LastTransactions';
import { Logo } from '../../components/Icons/Logo';
import Touchable from '../../components/Touchable';
import { useAuth } from '../../hooks/useAuth';
import PlusButton from '../../components/PlusButton';
import { useTransactions } from '../../hooks/useTransactions';
import Loader from '../../components/Loader';

interface Props {
  viewModel: HomeViewModelProps;
  props: HomeViewProps;
}

export function HomeView({ viewModel, props }: Props) {
  const { ...homeProps } = props;

  const { auth } = useAuth();
  const { user } = auth;

  const {
    incomeSummary,
    outcomeSummary,
    isLoading,
    handleNavigateSettings,
    handleNavigateNotifications,
    handleNavigateCreateTransaction,
  } = viewModel;

  const { isLoadingTransactions, isErrorTransactions, transactions } =
    useTransactions();

  const difference = incomeSummary.currentMonth - outcomeSummary.currentMonth;

  const { colors } = useTheme();

  return (
    <styled.Home>
      <styled.Container>
        <styled.ContainerHeader>
          <Logo />

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
                {difference > 0 ? formatAmount(difference) : '-'}
              </Text>
            </View>
          )}

          <styled.ContainerSummary>
            {isLoading ? (
              <Loader size={'large'} color={colors.green[400]} />
            ) : (
              <>
                <CategorySummary
                  categoryName="Receitas"
                  currentMonth={incomeSummary.currentMonth}
                  percent={incomeSummary.percent}
                  difference={incomeSummary.difference}
                />
                <CategorySummary
                  categoryName="Despesas"
                  currentMonth={outcomeSummary.currentMonth}
                  percent={outcomeSummary.percent}
                  difference={outcomeSummary.difference}
                />
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
