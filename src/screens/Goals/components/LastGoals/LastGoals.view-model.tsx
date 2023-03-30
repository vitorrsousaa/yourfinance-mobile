import { useState } from 'react';

export interface LastGoalsViewModelProps {
  state: string;
}

export function LastGoalsViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
