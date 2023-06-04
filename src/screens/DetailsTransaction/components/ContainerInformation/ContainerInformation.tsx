import { memo } from 'react';

import { ContainerInformationView } from './ContainerInformation.view';
import { ContainerInformationViewModel } from './ContainerInformation.view-model';

export interface ContainerInformationProps {
  icon: JSX.Element;
  description: string;
  modality: string;
  amount: number;
}

export interface ContainerInformationViewProps
  extends Omit<ContainerInformationProps, ''> {}

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
