import { memo } from 'react';
import { RouteProp } from '@react-navigation/native';

import { GoalsRootParamList } from '../../../../routes/private/Goal.routes';

import { CreateGoalTimeView } from './CreateGoalTime.view';
import { CreateGoalTimeViewModel } from './CreateGoalTime.view-model';

type RouteProps = RouteProp<GoalsRootParamList, 'CreateGoalTime'>;

export interface CreateGoalTimeProps {
  route: RouteProps;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface CreateGoalTimeViewProps
  extends Omit<CreateGoalTimeProps, 'route'> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

export type CreateGoalTimeParams = GoalsRootParamList['CreateGoalTime'];

function CreateGoalTime(props: CreateGoalTimeProps) {
  const { route, ...viewProps } = props;

  const viewModel = useViewModel(route.params);

  return <CreateGoalTimeView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel(params: CreateGoalTimeParams) {
  const viewModel = CreateGoalTimeViewModel(params);

  return viewModel;
}

export default memo(CreateGoalTime);
