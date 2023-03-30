import { useState } from 'react';

export interface GoalCardViewModelProps {
  state: string;
}

export function GoalCardViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
