
import { NotificationsViewModelProps } from './Notifications.view-model';
import { NotificationsViewProps } from './Notifications';
import * as styled from './Notifications.styles';
import { Text } from 'react-native';

interface Props {
  viewModel: NotificationsViewModelProps;
  props: NotificationsViewProps;
}

export function NotificationsView({ viewModel, props }: Props) {
  const { ...notificationsProps } = props;

  return (
    <styled.Notifications>
      <Text>Notifications</Text>
    </styled.Notifications>
  );
}
