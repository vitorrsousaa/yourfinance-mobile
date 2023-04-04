import { memo } from 'react';

import { TesteView } from './Teste.view';
import { TesteViewModel } from './Teste.view-model';

export interface TesteProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface TesteViewProps extends Omit<TesteProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Teste(props: TesteProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <TesteView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = TesteViewModel();

  return viewModel;
}

export default memo(Teste);
