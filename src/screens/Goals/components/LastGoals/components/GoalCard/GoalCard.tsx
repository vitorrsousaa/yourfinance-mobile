import { memo } from 'react';

import { GoalCardView } from './GoalCard.view';
import { GoalCardViewModel } from './GoalCard.view-model';

export interface GoalCardProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface GoalCardViewProps extends Omit<GoalCardProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function GoalCard(props: GoalCardProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <GoalCardView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = GoalCardViewModel();

  return viewModel;
}

export default memo(GoalCard);
