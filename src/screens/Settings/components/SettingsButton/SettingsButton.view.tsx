import { SettingsButtonViewModelProps } from './SettingsButton.view-model';
import { SettingsButtonViewProps } from './SettingsButton';
import * as styled from './SettingsButton.styles';
import { View } from 'react-native';
import { Arrow } from '../../../../components/Icons/Arrow';
import { useTheme } from 'styled-components/native';
import { Text } from '../../../../components/Text';

interface Props {
  viewModel: SettingsButtonViewModelProps;
  props: SettingsButtonViewProps;
}

export function SettingsButtonView({ viewModel, props }: Props) {
  const { title, icon, ...settingsButtonProps } = props;

  const { colors } = useTheme();

  return (
    <styled.SettingsButton activeOpacity={0.9} {...settingsButtonProps}>
      <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
        {icon}
        <Text size={16}>{title}</Text>
      </View>
      <styled.ContainerArrow>
        <Arrow color={colors.black[900]} />
      </styled.ContainerArrow>
    </styled.SettingsButton>
  );
}
