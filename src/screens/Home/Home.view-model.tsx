import { useState } from 'react';

export interface HomeViewModelProps {
  state: string;
}

export function HomeViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
