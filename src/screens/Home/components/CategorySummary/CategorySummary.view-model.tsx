import { useState } from 'react';

export interface CategorySummaryViewModelProps {
  state: string;
}

export function CategorySummaryViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
