import { memo } from 'react';

import { DangerZoneView } from './DangerZone.view';
import { DangerZoneViewModel } from './DangerZone.view-model';

export interface DangerZoneProps {
  action: string;
  onAction: () => void;
  isLoading?: boolean;
}

export interface DangerZoneViewProps extends Omit<DangerZoneProps, ''> {}

function DangerZone(props: DangerZoneProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <DangerZoneView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = DangerZoneViewModel();

  return viewModel;
}

export default memo(DangerZone);
