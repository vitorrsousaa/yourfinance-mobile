import { memo } from 'react';
import { ViewProps } from 'react-native';

import { TModality } from '../../../../types/Modality';

import { ModalSelectedModalityView } from './ModalSelectedModality.view';
import { ModalSelectedModalityViewModel } from './ModalSelectedModality.view-model';

export interface ModalSelectedModalityProps extends ViewProps {
  isVisible: boolean;
  data: TModality[];
  onPressItem: (modality: TModality) => void;
  onToggle: () => void;
  selectedModality: TModality | null;
}

export interface ModalSelectedModalityViewProps
  extends Omit<ModalSelectedModalityProps, ''> {}

function ModalSelectedModality(props: ModalSelectedModalityProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <ModalSelectedModalityView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = ModalSelectedModalityViewModel();

  return viewModel;
}

export default memo(ModalSelectedModality);
