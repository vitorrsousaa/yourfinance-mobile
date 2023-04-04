import { GoalsViewModelProps } from './Goals.view-model';
import { GoalsViewProps } from './Goals';
import * as styled from './Goals.styles';
import LastGoals from './components/LastGoals';
import { useTheme } from 'styled-components/native';
import Touchable from '../../components/Touchable';
import { Text } from '../../components/Text';
import PlusButton from '../../components/PlusButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootGoalsParamList } from './Goals.routes';

interface Props {
  viewModel: GoalsViewModelProps;
  props: GoalsViewProps;
}

export function GoalsView({ viewModel, props }: Props) {
  const { ...goalsProps } = props;

  const { colors } = useTheme();

  const navigation = useNavigation<NavigationProp<RootGoalsParamList>>();

  return (
    <styled.Goals>
      <styled.ContainerHeader>
        <Text weight="500" size={18} color={colors.white[100]}>
          Metas
        </Text>
        <Touchable item="search" />
      </styled.ContainerHeader>
      <LastGoals />
      <PlusButton onPress={() => navigation.navigate('Teste', undefined)} />
    </styled.Goals>
  );
}
