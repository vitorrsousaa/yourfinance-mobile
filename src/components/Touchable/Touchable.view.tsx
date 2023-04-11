import { TouchableViewModelProps } from './Touchable.view-model';
import { TouchableViewProps } from './Touchable';
import * as styled from './Touchable.styles';
import { Bell } from '../Icons/Bell';
import { User } from '../Icons/User';
import { Arrow } from '../Icons/Arrow';
import { Search } from '../Icons/Search';
import { Plus } from '../Icons/Plus';
import { Trash } from '../Icons/Trash';

interface Props {
  viewModel: TouchableViewModelProps;
  props: TouchableViewProps;
}

export type icons = 'bell' | 'user' | 'arrow' | 'search' | 'plus' | 'trash';

const icons: Record<icons, JSX.Element> = {
  bell: <Bell />,
  user: <User />,
  arrow: <Arrow />,
  search: <Search />,
  plus: <Plus />,
  trash: <Trash />,
};

export function TouchableView({ viewModel, props }: Props) {
  const { background = 'black', item, ...touchableProps } = props;

  const component = icons[item];

  return (
    <styled.Touchable
      background={background}
      activeOpacity={0.6}
      {...touchableProps}
    >
      {component}
    </styled.Touchable>
  );
}
