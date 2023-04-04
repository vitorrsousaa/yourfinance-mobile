import { useState } from 'react';

export interface PlusButtonViewModelProps {
  state: string;
}

export function PlusButtonViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
