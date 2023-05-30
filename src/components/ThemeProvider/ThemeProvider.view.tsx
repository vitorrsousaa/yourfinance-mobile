import { ThemeProvider } from 'styled-components/native';

import theme from '../../assets/theme';

import { ThemeProviderViewProps } from './ThemeProvider';
import { ThemeProviderViewModelProps } from './ThemeProvider.view-model';

interface Props {
  viewModel: ThemeProviderViewModelProps;
  props: ThemeProviderViewProps;
}

export function ThemeProviderView({ viewModel, props }: Props) {
  const { children, ...themeProviderProps } = props;

  return (
    <ThemeProvider theme={theme} {...themeProviderProps}>
      {children}
    </ThemeProvider>
  );
}
