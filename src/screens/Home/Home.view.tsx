
import { HomeViewModelProps } from './Home.view-model';
import { HomeViewProps } from './Home';
import * as styled from './Home.styles';
import { Text } from 'react-native';



interface Props {
  viewModel: HomeViewModelProps;
  props: HomeViewProps;
}

export function HomeView({ viewModel, props }: Props) {
  const { ...homeProps } = props;

  return (
    <styled.Home>
      <Text>Home</Text>
    </styled.Home>
  );
}
