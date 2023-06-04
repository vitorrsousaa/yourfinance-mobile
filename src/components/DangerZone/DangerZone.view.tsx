import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import Button from '../Button';
import { Text } from '../Text';

import { DangerZoneViewProps } from './DangerZone';
import * as styled from './DangerZone.styles';
import { DangerZoneViewModelProps } from './DangerZone.view-model';

interface Props {
  viewModel: DangerZoneViewModelProps;
  props: DangerZoneViewProps;
}

export function DangerZoneView({ viewModel, props }: Props) {
  const { action, onAction, isLoading, ...dangerZoneProps } = props;

  const { colors } = useTheme();

  return (
    <styled.DangerZone {...dangerZoneProps}>
      <View style={{ gap: 4 }}>
        <Text size={20} weight="500" color={colors.red[600]}>
          Danger zone
        </Text>
        <Text size={14} color={colors.black[700]}>
          Cuidado, essas ações não podem ser desfeitas
        </Text>
      </View>
      <Button
        variant="danger"
        style={{ width: '100%' }}
        onPress={onAction}
        loading={isLoading}
        testID="action-danger-zone"
      >
        {action}
      </Button>
    </styled.DangerZone>
  );
}
