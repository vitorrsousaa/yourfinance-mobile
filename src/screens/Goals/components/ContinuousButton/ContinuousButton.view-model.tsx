import { useState } from 'react';

export interface ContinuousButtonViewModelProps {
  state: string;
}

export function ContinuousButtonViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState
  };
}
