import { useState } from 'react';

export interface ButtonViewModelProps {
  state: string;
}

export function ButtonViewModel() {
  const [state, setState] = useState('')

  return {
    state,
    setState
  }
}
