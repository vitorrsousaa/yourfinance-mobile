import { useState } from 'react';

export interface ToggleViewModelProps {
  state: string;
}

export function ToggleViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState
  };
}
