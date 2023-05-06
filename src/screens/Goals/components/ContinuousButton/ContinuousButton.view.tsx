import { useTheme } from 'styled-components/native';

import Icon from '../../../../components/Icons';

import { ContinuousButtonViewProps } from './ContinuousButton';
import * as styled from './ContinuousButton.styles';
import { ContinuousButtonViewModelProps } from './ContinuousButton.view-model';

interface Props {
  viewModel: ContinuousButtonViewModelProps;
  props: ContinuousButtonViewProps;
}

export function ContinuousButtonView({ viewModel, props }: Props) {
  const { isValid, ...continuousButtonProps } = props;

  const { colors } = useTheme();

  return (
    <styled.ContinuousButton
      activeOpacity={0.9}
      disabled={!isValid}
      {...continuousButtonProps}
    >
      <Icon name="arrowRight" color={!isValid ? colors.black[600] : ''} />
    </styled.ContinuousButton>
  );
}
