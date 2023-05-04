import { memo } from 'react';

import { CategorySummaryView } from './CategorySummary.view';
import { CategorySummaryViewModel } from './CategorySummary.view-model';

export interface CategorySummaryProps {
  categoryName: string;
  currentMonth: number;
  percent: number;
  difference: number;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface CategorySummaryViewProps
  extends Omit<
    CategorySummaryProps,
    'categoryName' | 'currentMonth' | 'percent' | 'difference'
  > {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

export interface ViewModelProps
  extends Pick<
    CategorySummaryProps,
    'categoryName' | 'currentMonth' | 'percent' | 'difference'
  > {}

function CategorySummary(props: CategorySummaryProps) {
  const { currentMonth, categoryName, percent, difference, ...viewProps } =
    props;

  const data = { currentMonth, categoryName, percent, difference };

  const viewModel = useViewModel(data);

  return <CategorySummaryView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel(data: ViewModelProps) {
  const viewModel = CategorySummaryViewModel(data);

  return viewModel;
}

export default memo(CategorySummary);
