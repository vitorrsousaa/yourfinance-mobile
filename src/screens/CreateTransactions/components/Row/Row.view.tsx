import { RowViewModelProps } from './Row.view-model';
import { RowViewProps } from './Row';
import * as styled from './Row.styles';
import { View } from 'react-native';
import { Text } from '../../../../components/Text';
import { useTheme } from 'styled-components/native';

interface Props {
  viewModel: RowViewModelProps;
  props: RowViewProps;
}

export function RowView({ viewModel, props }: Props) {
  const { icon, title, rightIcon, children } = props;

  const { colors } = useTheme();

  return (
    <styled.Row>
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
      {rightIcon && rightIcon}
    </styled.Row>
  );
}
