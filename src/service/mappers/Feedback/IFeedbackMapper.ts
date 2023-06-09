import { TFeedback, TFeedbackPersistance } from '../../../types/Feedback';

export interface IFeedbackMapper {
  toPersistance(feedback: TFeedback): TFeedbackPersistance;
}
