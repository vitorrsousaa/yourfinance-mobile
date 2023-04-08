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
import { useCategories } from '../../hooks/useCategories';

interface Props {
  viewModel: HomeViewModelProps;
  props: HomeViewProps;
}

export function HomeView({ viewModel, props }: Props) {
  const { ...homeProps } = props;

  const { auth } = useAuth();
  const { categories, isLoading, isError } = useCategories();
  const { user } = auth;

  const {
    incomeSummary,
    outcomeSummary,
    handleNavigateSettings,
    handleNavigateNotifications,
  } = viewModel;

  const { isLoadingTransactions, isErrorTransactions, transactions } =
    useTransactions();

  const { colors } = useTheme();

  // Preciso adicionar um margin top do tamanho da status bar

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

          <View>
            <Text color={colors.black[200]}>Saldo disponível</Text>
            <Text weight="500" size={28} color={colors.white[100]}>
              {formatAmount(4521)}
            </Text>
          </View>

          <styled.ContainerSummary>
            <CategorySummary
              categoryName="Receitas"
              currentMonth={incomeSummary.currentMonth}
              percent={incomeSummary.percent}
            />
            <CategorySummary
              categoryName="Despesas"
              currentMonth={outcomeSummary.currentMonth}
              percent={outcomeSummary.percent}
            />
          </styled.ContainerSummary>
        </styled.ContainerHero>
      </styled.Container>
      <styled.ContainerTransactions>
        <LastTransactions
          transactions={transactions.slice(0, 4)}
          isLoading={isLoadingTransactions}
          hasError={isErrorTransactions}
        />
      </styled.ContainerTransactions>

      <PlusButton />
    </styled.Home>
  );
}
