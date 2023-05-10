import { ReactNode, memo } from 'react';

import { ThemeProviderView } from './ThemeProvider.view';
import { ThemeProviderViewModel } from './ThemeProvider.view-model';

export interface ThemeProviderProps {
  children: ReactNode;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface ThemeProviderViewProps extends Omit<ThemeProviderProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function ThemeProvider(props: ThemeProviderProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <ThemeProviderView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = ThemeProviderViewModel();

  return viewModel;
}

export default memo(ThemeProvider);

