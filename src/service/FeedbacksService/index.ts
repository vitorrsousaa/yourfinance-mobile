import { TFeedback } from '../../types/Feedback';
import { TFeedbackPersistance } from '../../types/Feedback';
import HttpClient from '../HttpClient';
import FeedbackMapper from '../mappers/Feedback/FeedbackMapper';

import { IFeedbacksService } from './IFeedbacksService';

class FeedbacksService implements IFeedbacksService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async register(feedback: TFeedback): Promise<TFeedbackPersistance> {
    const persistance = FeedbackMapper.toPersistance(feedback);
    const response = await this.httpClient.post<TFeedbackPersistance>(
      '/feedback',
      persistance
    );

    return response;
  }
}

export default new FeedbacksService();
