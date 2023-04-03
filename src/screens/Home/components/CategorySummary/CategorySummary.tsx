import { memo } from 'react';

import { CategorySummaryView } from './CategorySummary.view';
import { CategorySummaryViewModel } from './CategorySummary.view-model';

export interface CategorySummaryProps {
  categoryName: string;
  currentMonth: number;
  percent: number;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface CategorySummaryViewProps
  extends Omit<CategorySummaryProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function CategorySummary(props: CategorySummaryProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <CategorySummaryView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = CategorySummaryViewModel();

  return viewModel;
}

export default memo(CategorySummary);
