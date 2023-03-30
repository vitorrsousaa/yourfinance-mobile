import { useState } from 'react';

export interface GoalsViewModelProps {
  state: string;
}

export function GoalsViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
