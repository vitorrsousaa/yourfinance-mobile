import { memo,ReactNode } from 'react';

import { ContainerInformationView } from './ContainerInformation.view';
import { ContainerInformationViewModel } from './ContainerInformation.view-model';

export interface ContainerInformationProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface ContainerInformationViewProps
  extends Omit<ContainerInformationProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function ContainerInformation(props: ContainerInformationProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <ContainerInformationView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = ContainerInformationViewModel();

  return viewModel;
}

export default memo(ContainerInformation);
