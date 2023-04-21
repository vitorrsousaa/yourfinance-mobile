import { useState } from 'react';

export interface FeedbackViewModelProps {
  state: string;
}

export function FeedbackViewModel() {
  const [state, setState] = useState('')

  return {
    state,
    setState
  }
}
