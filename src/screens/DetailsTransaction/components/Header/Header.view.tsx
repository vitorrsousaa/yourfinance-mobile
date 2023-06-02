import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

import Icon from '../../../../components/Icons';
import { Text } from '../../../../components/Text';
import Touchable from '../../../../components/Touchable';
import { formatCompleteDate } from '../../../../utils/formatDate';

import { HeaderViewProps } from './Header';
import * as styled from './Header.styles';
import { HeaderViewModelProps } from './Header.view-model';

interface Props {
  viewModel: HeaderViewModelProps;
  props: HeaderViewProps;
}

export function HeaderView({ viewModel, props }: Props) {
  const { onBack, date, onDelete, disabled, ...headerProps } = props;

  const { colors } = useTheme();

  return (
    <styled.Header {...headerProps}>
      <Touchable
        item="arrow"
        background="white"
        color={colors.black[900]}
        onPress={onBack}
        touchSoundDisabled
        testID="back-button"
      />

      <Text weight="500" size={15}>
        {formatCompleteDate(date)}
      </Text>
      <TouchableOpacity
        activeOpacity={0.9}
        touchSoundDisabled
        onPress={onDelete}
        disabled={disabled}
        testID="delete-button"
      >
        <Icon name="trash" color={colors.black[900]} />
      </TouchableOpacity>
    </styled.Header>
  );
}
