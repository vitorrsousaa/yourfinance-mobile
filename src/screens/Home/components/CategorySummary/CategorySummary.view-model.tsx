import Icon from '../../../../components/Icons';
import formatAmount from '../../../../utils/formatAmout';

import { ViewModelProps } from './CategorySummary';

export interface CategorySummaryViewModelProps {
  categoryName: string;
  currentMonth: string;
  percent: string;
  difference: string;
  getIcon: (color: string) => JSX.Element;
}

export function CategorySummaryViewModel(data: ViewModelProps) {
  const categoryName = data.categoryName ? data.categoryName : '-';

  const currentMonth = data.currentMonth
    ? formatAmount(data.currentMonth)
    : formatAmount(0);

  const percent = data.percent ? `${Math.floor(data.percent)}%` : '0%';

  const difference = data.difference
    ? formatAmount(data.difference)
    : formatAmount(0);

  function getIcon(color: string) {
    if (data.percent < 0) {
      return <Icon name="trendDown" testID="trend-down" color={color} />;
    } else {
      return <Icon name="trendUp" testID="trend-up" color={color} />;
    }
  }

  return {
    currentMonth,
    categoryName,
    percent,
    difference,
    getIcon,
  };
}
