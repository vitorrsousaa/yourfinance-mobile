import { TBiggestModality, TCardSummary } from '../../types/Analytics';

export interface IAnalyticsService {
  getCardsSummary(categoryId: string): Promise<TCardSummary>;
  getBiggestModalities(): Promise<TBiggestModality | null>;
}
