import { memo } from 'react';
import { RouteProp } from '@react-navigation/native';

import { GoalsRootParamList } from '../../../../routes/private/Goal.routes';
import { TGoal } from '../../../../types/Goal';

import { DetailsGoalsView } from './DetailsGoals.view';
import { DetailsGoalsViewModel } from './DetailsGoals.view-model';

type RouteProps = RouteProp<GoalsRootParamList, 'DetailsGoals'>;

export interface DetailsGoalsProps {
  route: RouteProps;
}

export interface DetailsGoalsViewProps
  extends Omit<DetailsGoalsProps, 'route'> {}

function DetailsGoals(props: DetailsGoalsProps) {
  const { route, ...viewProps } = props;

  const viewModel = useViewModel(route.params.goal);

  return <DetailsGoalsView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel(goal: TGoal) {
  const viewModel = DetailsGoalsViewModel(goal);

  return viewModel;
}

export default memo(DetailsGoals);
