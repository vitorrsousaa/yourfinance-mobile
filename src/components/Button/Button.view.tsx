import { ButtonViewModelProps } from './Button.view-model';
import { ButtonViewProps } from './Button';
import * as styled from './Button.styles';

import buttonVariants from './theme';

interface Props {
  viewModel: ButtonViewModelProps;
  props: ButtonViewProps;
}

export function ButtonView({ viewModel, props }: Props) {
  const { children, variant, disabled, ...buttonProps } = props;

  return (
    <styled.Button
      customTheme={buttonVariants}
      variant={variant}
      disabled={disabled}
      activeOpacity={0.7}
      {...buttonProps}
    >
      <styled.TextBase
        customTheme={buttonVariants}
        variant={variant}
        disabled={disabled}
      >
        {children}
      </styled.TextBase>
    </styled.Button>
  );
}
