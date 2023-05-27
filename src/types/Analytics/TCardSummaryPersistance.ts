import { TCategory } from '../Category';

export interface TCardSummaryPersistance {
  difference: number;
  percent: number;
  currentMonth: number;
  lastMonth: number;
  category: TCategory;
}
