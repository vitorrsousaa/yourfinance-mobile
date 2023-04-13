import { ContinuousButtonViewModelProps } from './ContinuousButton.view-model';
import { ContinuousButtonViewProps } from './ContinuousButton';
import * as styled from './ContinuousButton.styles';
import { ArrowRight } from '../../../../components/Icons/ArrowRight';
import { useTheme } from 'styled-components/native';

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
      <ArrowRight color={!isValid ? colors.black[600] : ''} />
    </styled.ContinuousButton>
  );
}
