import { useState } from 'react';

export interface LoaderViewModelProps {
  state: string;
}

export function LoaderViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState
  };
}
