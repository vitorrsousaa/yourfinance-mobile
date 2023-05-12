import { TCardSummary } from '../../types/Analytics';
import HttpClient from '../HttpClient';

import { IAnalyticsService } from './IAnalyticsService';

class AnalyticsService implements IAnalyticsService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async getCardsSummary(categoryId: string) {
    return this.httpClient.get<TCardSummary>(
      `/analytics/getSummaryByCategory/${categoryId}`
    );
  }
}

export default new AnalyticsService();
