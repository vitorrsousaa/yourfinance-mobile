import { memo } from 'react';

import { TGoal } from '../../../../../../types/Goal';

import { GoalCardView } from './GoalCard.view';
import { GoalCardViewModel } from './GoalCard.view-model';

export interface GoalCardProps {
  goal: TGoal;
}

export interface GoalCardViewProps extends Omit<GoalCardProps, ''> {}

function GoalCard(props: GoalCardProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel(props.goal);

  return <GoalCardView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel(goal: TGoal) {
  const viewModel = GoalCardViewModel(goal);

  return viewModel;
}

export default memo(GoalCard);
