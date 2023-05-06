import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Text } from '../Text';
import Touchable from '../Touchable';

import { HeaderViewProps } from './Header';
import * as styled from './Header.styles';
import { HeaderViewModelProps } from './Header.view-model';

interface Props {
  viewModel: HeaderViewModelProps;
  props: HeaderViewProps;
}

export function HeaderView({ viewModel, props }: Props) {
  const { title, rightIcon, onPressLeftIcon } = props;

  const { colors } = useTheme();

  return (
    <styled.Header>
      <View style={{ gap: 8, flexDirection: 'row', alignItems: 'center' }}>
        {onPressLeftIcon && (
          <Touchable item="arrow" onPress={onPressLeftIcon} />
        )}
        <Text weight="500" size={22} color={colors.white[100]}>
          {title}
        </Text>
      </View>
      {rightIcon && rightIcon}
    </styled.Header>
  );
}
