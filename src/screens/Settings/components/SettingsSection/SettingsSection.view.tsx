import { Text } from '../../../../components/Text';

import { SettingsSectionViewProps } from './SettingsSection';
import * as styled from './SettingsSection.styles';
import { SettingsSectionViewModelProps } from './SettingsSection.view-model';

interface Props {
  viewModel: SettingsSectionViewModelProps;
  props: SettingsSectionViewProps;
}

export function SettingsSectionView({ viewModel, props }: Props) {
  const { title, children } = props;

  return (
    <styled.SettingsSection>
      <Text weight="500" size={24}>
        {title}
      </Text>
      {children}
    </styled.SettingsSection>
  );
}
