import { GoalsViewModelProps } from './Goals.view-model';
import { GoalsViewProps } from './Goals';
import * as styled from './Goals.styles';
import LastGoals from './components/LastGoals';
import { useTheme } from 'styled-components/native';
import Touchable from '../../components/Touchable';
import { Text } from '../../components/Text';

interface Props {
  viewModel: GoalsViewModelProps;
  props: GoalsViewProps;
}

export function GoalsView({ viewModel, props }: Props) {
  const { ...goalsProps } = props;

  const { colors } = useTheme();

  return (
    <styled.Goals>
      <styled.ContainerHeader>
        <Text weight="500" size={18} color={colors.white[100]}>
          Metas
        </Text>
        <Touchable item="search" />
      </styled.ContainerHeader>
      <LastGoals />
    </styled.Goals>
  );
}
