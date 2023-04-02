import { TCardSummary } from '../../types/Analytics';

export interface IAnalyticsService {
  getCardsSummary(categoryId: string): Promise<TCardSummary>;
}
