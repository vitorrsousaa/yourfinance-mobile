import { useState } from 'react';

export interface MyAccountViewModelProps {
  state: string;
}

export function MyAccountViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState
  };
}
