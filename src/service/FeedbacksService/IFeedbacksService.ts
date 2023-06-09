import { TFeedback, TFeedbackPersistance } from '../../types/Feedback';

export interface IFeedbacksService {
  register(feedback: TFeedback): Promise<TFeedbackPersistance>;
}
