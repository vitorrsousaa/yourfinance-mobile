import { useState } from 'react';

export interface ContainerInformationViewModelProps {
  state: string;
}

export function ContainerInformationViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
