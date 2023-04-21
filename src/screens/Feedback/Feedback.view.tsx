
import { FeedbackViewModelProps } from './Feedback.view-model';
import { FeedbackViewProps } from './Feedback';
import * as styled from './Feedback.styles';
import { Text } from 'react-native';

interface Props {
  viewModel: FeedbackViewModelProps;
  props: FeedbackViewProps;
}

export function FeedbackView({ viewModel, props }: Props) {
  const { ...feedbackProps } = props;

  return (
    <styled.Feedback>
      <Text>Feedback</Text>
    </styled.Feedback>
  );
}
