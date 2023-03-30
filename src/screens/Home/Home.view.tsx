import { HomeViewModelProps } from './Home.view-model';
import { HomeViewProps } from './Home';
import * as styled from './Home.styles';
import { View } from 'react-native';
import CategorySummary from './components/CategorySummary';
import { Text } from '../../components/Text';
import { useTheme } from 'styled-components/native';
import formatAmount from '../../utils/formatAmout';
import LastTransactions from '../../components/LastTransactions';

interface Props {
  viewModel: HomeViewModelProps;
  props: HomeViewProps;
}

export function HomeView({ viewModel, props }: Props) {
  const { ...homeProps } = props;

  const theme = useTheme();

  // Preciso adicionar um margin top do tamanho da status bar

  return (
    <styled.Home>
      <styled.Container>
        <styled.ContainerHeader>
          <Text>Logo</Text>
          <View>
            <Text>Notification</Text>
            <Text>User</Text>
          </View>
        </styled.ContainerHeader>
        <styled.ContainerHero>
          <styled.ContainerBalance>
            <Text color={theme.colors.black[200]}>Saldo disponível</Text>
            <Text weight="500" size={28} color={theme.colors.white[100]}>
              {formatAmount(4521)}
            </Text>
          </styled.ContainerBalance>
          <styled.ContainerSummary>
            <CategorySummary
              categoryName="Receitas"
              amount={123}
              difference={41}
            />
            <CategorySummary
              categoryName="Despesas"
              amount={456}
              difference={15}
            />
          </styled.ContainerSummary>
        </styled.ContainerHero>
      </styled.Container>
      <styled.ContainerTransactions>
        <LastTransactions />
      </styled.ContainerTransactions>
    </styled.Home>
  );
}
