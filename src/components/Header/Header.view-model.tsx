import { useState } from 'react';

export interface HeaderViewModelProps {
  state: string;
}

export function HeaderViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState
  };
}
