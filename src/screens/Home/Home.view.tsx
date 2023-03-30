import { HomeViewModelProps } from './Home.view-model';
import { HomeViewProps } from './Home';
import * as styled from './Home.styles';
import { Text, View } from 'react-native';
import CategorySummary from './components/CategorySummary';

interface Props {
  viewModel: HomeViewModelProps;
  props: HomeViewProps;
}

export function HomeView({ viewModel, props }: Props) {
  const { ...homeProps } = props;

  return (
    <styled.Home>
      <View>
        <Text>Logo</Text>
        <Text>Notification</Text>
        <Text>User</Text>
      </View>
      <View>
        <Text>Saldo disponível</Text>
        <Text>R$ 4521,10</Text>
      </View>
      <CategorySummary categoryName="Receitas" amount={123} difference={41} />
      <CategorySummary categoryName="Despesas" amount={456} difference={15} />
    </styled.Home>
  );
}
