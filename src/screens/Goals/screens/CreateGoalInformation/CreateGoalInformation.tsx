import { memo } from 'react';

import { CreateGoalInformationView } from './CreateGoalInformation.view';
import { CreateGoalInformationViewModel } from './CreateGoalInformation.view-model';

export interface CreateGoalInformationProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface CreateGoalInformationViewProps
  extends Omit<CreateGoalInformationProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function CreateGoalInformation(props: CreateGoalInformationProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <CreateGoalInformationView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = CreateGoalInformationViewModel();

  return viewModel;
}

export default memo(CreateGoalInformation);
