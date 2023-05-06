import { memo,ReactElement } from 'react';

import { HeaderView } from './Header.view';
import { HeaderViewModel } from './Header.view-model';

export interface HeaderProps {
  title: string;
  onPressLeftIcon?: () => void;
  rightIcon?: ReactElement;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface HeaderViewProps extends Omit<HeaderProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Header(props: HeaderProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <HeaderView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = HeaderViewModel();

  return viewModel;
}

export default memo(Header);
