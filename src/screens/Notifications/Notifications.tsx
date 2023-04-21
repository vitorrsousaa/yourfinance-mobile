import { memo } from 'react';

import { NotificationsView } from './Notifications.view';
import { NotificationsViewModel } from './Notifications.view-model';

export interface NotificationsProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface NotificationsViewProps
    extends Omit<NotificationsProps, ''> {
// Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Notifications(props: NotificationsProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return (
      <NotificationsView viewModel={viewModel} props={viewProps} />
  );
}

export function useViewModel(){
  const viewModel = NotificationsViewModel()

  return viewModel;
}

export default memo(Notifications);
