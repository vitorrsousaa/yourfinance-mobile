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
          <Logo />

          <styled.ContainerButtons>
            <Touchable item="bell" style={{ marginRight: 8 }} />
            <Touchable item="user" background="white" />
          </styled.ContainerButtons>
        </styled.ContainerHeader>
        <styled.ContainerHero>
          <View>
            <Text color={theme.colors.black[200]}>Saldo disponível</Text>
            <Text weight="500" size={28} color={theme.colors.white[100]}>
              {formatAmount(4521)}
            </Text>
          </View>
          <styled.ContainerSummary>
            <CategorySummary
              categoryName="Receitas"
              amount={123}
              difference={41}
            />
            <CategorySummary
              categoryName="Despesas"
              amount={456}
              difference={-15}
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
