import { useMemo } from 'react';
import { ViewModelProps } from './CategorySummary';

export interface CategorySummaryViewModelProps {
  categoryName: string;
  currentMonth: number;
  percent: number;
  difference: number;
}

export function CategorySummaryViewModel(data: ViewModelProps) {
  const categoryName = useMemo(
    () => (data.categoryName ? data.categoryName : '-'),
    []
  );
  const currentMonth = useMemo(
    () => (data.currentMonth ? data.currentMonth : 0),
    []
  );
  const percent = useMemo(() => (data.percent ? data.percent : 0), []);
  const difference = useMemo(() => (data.difference ? data.difference : 0), []);

  return {
    currentMonth,
    categoryName,
    percent,
    difference,
  };
}
