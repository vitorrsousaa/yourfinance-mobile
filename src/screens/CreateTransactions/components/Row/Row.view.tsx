import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import Loader from '../../../../components/Loader';
import { Text } from '../../../../components/Text';

import { RowViewProps } from './Row';
import * as styled from './Row.styles';
import { RowViewModelProps } from './Row.view-model';

interface Props {
  viewModel: RowViewModelProps;
  props: RowViewProps;
}

export function RowView({ viewModel, props }: Props) {
  const {
    icon,
    title,
    rightIcon,
    children,
    isLoading = false,
    ...rowProps
  } = props;

  const { colors } = useTheme();

  return (
    <styled.Row {...rowProps} activeOpacity={1}>
      <View
        style={{
          gap: 8,
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: children ? 8 : 0,
        }}
      >
        {icon}
        {title && (
          <Text color={colors.black[700]} size={16}>
            {title}
          </Text>
        )}
      </View>
      {children && <View style={{ flex: 1 }}>{children}</View>}
      {rightIcon && (isLoading ? <Loader /> : rightIcon)}
    </styled.Row>
  );
}
