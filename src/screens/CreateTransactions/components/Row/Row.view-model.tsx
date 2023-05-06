import { useState } from 'react';

export interface RowViewModelProps {
  state: string;
}

export function RowViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState
  };
}
