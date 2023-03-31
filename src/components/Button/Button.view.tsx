import { ButtonViewModelProps } from './Button.view-model';
import { ButtonViewProps } from './Button';
import * as styled from './Button.styles';

import buttonVariants from './theme';
import { ActivityIndicator } from 'react-native';

interface Props {
  viewModel: ButtonViewModelProps;
  props: ButtonViewProps;
}

export function ButtonView({ viewModel, props }: Props) {
  const { children, variant, disabled, loading, ...buttonProps } = props;

  return (
    <styled.Button
      customTheme={buttonVariants}
      variant={variant}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...buttonProps}
    >
      {!loading && (
        <styled.TextBase
          customTheme={buttonVariants}
          variant={variant}
          disabled={disabled}
        >
          {children}
        </styled.TextBase>
      )}

      {loading && <ActivityIndicator />}
    </styled.Button>
  );
}
