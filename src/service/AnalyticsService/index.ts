import { TCardSummary, TCardSummaryPersistance } from '../../types/Analytics';
import HttpClient from '../HttpClient';
import CardSummaryMapper from '../mappers/Analytics';

import { IAnalyticsService } from './IAnalyticsService';

class AnalyticsService implements IAnalyticsService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async getCardsSummary(categoryId: string): Promise<TCardSummary> {
    const response = await this.httpClient.get<TCardSummaryPersistance>(
      `/analytics/getSummaryByCategory/${categoryId}`
    );

    return CardSummaryMapper.toDomain(response);
  }
}

export default new AnalyticsService();
