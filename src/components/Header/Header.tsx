import { memo, ReactElement } from 'react';

import { HeaderView } from './Header.view';
import { HeaderViewModel } from './Header.view-model';

export interface HeaderProps {
  title: string;
  onPressLeftIcon?: () => void;
  rightIcon?: ReactElement;
  leftIcon?: boolean;
}

export interface HeaderViewProps extends Omit<HeaderProps, ''> {}

type DefaultProps = Pick<HeaderProps, 'leftIcon'>;
type Props = HeaderProps & DefaultProps;

const defaultProps: DefaultProps = {
  leftIcon: true,
};

function Header(props: Props) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <HeaderView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = HeaderViewModel();

  return viewModel;
}

Header.defaultProps = defaultProps;

export default memo(Header);
