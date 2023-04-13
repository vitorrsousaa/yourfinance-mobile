import { memo } from 'react';

import { DetailsGoalsView } from './DetailsGoals.view';
import { DetailsGoalsViewModel } from './DetailsGoals.view-model';
import { RouteProp } from '@react-navigation/native';
import { GoalsRootParamList } from '../../../../routes/private/Goal.routes';

type RouteProps = RouteProp<GoalsRootParamList, 'DetailsGoals'>;

export interface DetailsGoalsProps {
  route: RouteProps;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface DetailsGoalsViewProps
  extends Omit<DetailsGoalsProps, 'route'> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function DetailsGoals(props: DetailsGoalsProps) {
  const { route, ...viewProps } = props;

  const viewModel = useViewModel();

  return <DetailsGoalsView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = DetailsGoalsViewModel();

  return viewModel;
}

export default memo(DetailsGoals);
