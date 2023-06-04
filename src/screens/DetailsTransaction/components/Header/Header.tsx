import { memo } from 'react';

import { HeaderView } from './Header.view';
import { HeaderViewModel } from './Header.view-model';

export interface HeaderProps {
  disabled: boolean;
  date: Date;
  onBack: () => void;
  onDelete: () => void;
}

export interface HeaderViewProps extends Omit<HeaderProps, ''> {}

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
