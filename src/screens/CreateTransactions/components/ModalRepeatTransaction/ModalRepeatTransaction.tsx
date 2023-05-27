import { memo } from 'react';
import { ViewProps } from 'react-native';

import { ModalRepeatTransactionView } from './ModalRepeatTransaction.view';
import { ModalRepeatTransactionViewModel } from './ModalRepeatTransaction.view-model';

export interface ModalRepeatTransactionProps extends ViewProps {
  isVisible: boolean;
  month: number;
  onToggle: () => void;
  onPlus: () => void;
  onMinus: () => void;
}

export interface ModalRepeatTransactionViewProps
  extends Omit<ModalRepeatTransactionProps, ''> {}

function ModalRepeatTransaction(props: ModalRepeatTransactionProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <ModalRepeatTransactionView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = ModalRepeatTransactionViewModel();

  return viewModel;
}

export default memo(ModalRepeatTransaction);
