import { memo, ReactNode } from 'react';

import { ModalView } from './Modal.view';
import { ModalViewModel } from './Modal.view-model';

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  type?: 'danger' | 'primary';
  title: string;
  subtitle?: string;
  children?: ReactNode;
  action?: string;
  onAction?: () => void;
  isLoadingAction?: boolean;
  isDisabledAction?: boolean;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface ModalViewProps extends Omit<ModalProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Modal(props: ModalProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <ModalView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = ModalViewModel();

  return viewModel;
}

export default memo(Modal);
