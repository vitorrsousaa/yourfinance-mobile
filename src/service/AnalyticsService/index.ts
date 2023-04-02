import { TCardSummary } from '../../types/Analytics';
import HttpClient from '../HttpClient';
import { IAnalyticsService } from './IAnalyticsService';

class AnalyticsService implements IAnalyticsService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient('http://192.168.0.105:3001/api/analytics');
  }

  async getCardsSummary(categoryId: string) {
    return this.httpClient.get<TCardSummary>(
      `/getSummaryByCategory/${categoryId}`
    );
  }
}

export default new AnalyticsService();
