import { HeaderViewModelProps } from './Header.view-model';
import { HeaderViewProps } from './Header';
import * as styled from './Header.styles';
import {} from 'react-native';
import { Text } from '../Text';
import { useTheme } from 'styled-components/native';
import Touchable from '../Touchable';

interface Props {
  viewModel: HeaderViewModelProps;
  props: HeaderViewProps;
}

export function HeaderView({ viewModel, props }: Props) {
  const { title, onPressLeftIcon } = props;
  const { colors } = useTheme();

  return (
    <styled.Header>
      <Touchable item="arrow" onPress={onPressLeftIcon} />
      <Text weight="500" size={22} color={colors.white[100]}>
        {title}
      </Text>
    </styled.Header>
  );
}
