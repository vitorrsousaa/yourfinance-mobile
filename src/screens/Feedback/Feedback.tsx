import { memo } from 'react';

import { FeedbackView } from './Feedback.view';
import { FeedbackViewModel } from './Feedback.view-model';

export interface FeedbackProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface FeedbackViewProps
    extends Omit<FeedbackProps, ''> {
// Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Feedback(props: FeedbackProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return (
    <FeedbackView viewModel={viewModel} props={viewProps} />
  );
}

export function useViewModel(){
  const viewModel = FeedbackViewModel();

  return viewModel;
}

export default memo(Feedback);
