import { TFeedback, TFeedbackPersistance } from '../../../types/Feedback';

import { IFeedbackMapper } from './IFeedbackMapper';

class FeedbackMapper implements IFeedbackMapper {
  toPersistance(feedback: TFeedback): TFeedbackPersistance {
    return {
      title: feedback.selectedFeedback,
      description: feedback.description,
    };
  }
}

export default new FeedbackMapper();
