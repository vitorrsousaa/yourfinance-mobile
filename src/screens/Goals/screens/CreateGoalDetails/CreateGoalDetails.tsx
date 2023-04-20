import { memo } from 'react';

import { CreateGoalDetailsView } from './CreateGoalDetails.view';
import { CreateGoalDetailsViewModel } from './CreateGoalDetails.view-model';
import { RouteProp } from '@react-navigation/native';
import { GoalsRootParamList } from '../../../../routes/private/Goal.routes';

type RouteProps = RouteProp<GoalsRootParamList, 'CreateGoalDetails'>;

export interface CreateGoalDetailsProps {
  route: RouteProps;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface CreateGoalDetailsViewProps
  extends Omit<CreateGoalDetailsProps, 'route'> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

export type CreateGoalDetailsParams = GoalsRootParamList['CreateGoalDetails'];

function CreateGoalDetails(props: CreateGoalDetailsProps) {
  const { route, ...viewProps } = props;

  const viewModel = useViewModel(route.params);

  return <CreateGoalDetailsView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel(params: CreateGoalDetailsParams) {
  const viewModel = CreateGoalDetailsViewModel(params);

  return viewModel;
}

export default memo(CreateGoalDetails);
