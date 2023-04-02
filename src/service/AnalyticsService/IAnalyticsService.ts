import { CardSummary } from '../../types/Analytics';

export interface IAnalyticsService {
  getCardsSummary(categoryId: string): Promise<CardSummary>;
}
