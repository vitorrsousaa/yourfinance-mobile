import { ActivityIndicator } from 'react-native';

import { ButtonViewProps } from './Button';
import * as styled from './Button.styles';
import { ButtonViewModelProps } from './Button.view-model';
import buttonVariants from './theme';

interface Props {
  viewModel: ButtonViewModelProps;
  props: ButtonViewProps;
}

export function ButtonView({ viewModel, props }: Props) {
  const { children, variant, disabled, loading, ...buttonProps } = props;

  return (
    <styled.Button
      {...buttonProps}
      customTheme={buttonVariants}
      variant={variant}
      disabled={disabled || loading}
      activeOpacity={0.7}
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

      {loading && (
        <ActivityIndicator color={buttonVariants[variant].loading.background} />
      )}
    </styled.Button>
  );
}
