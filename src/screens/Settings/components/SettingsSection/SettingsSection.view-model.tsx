import { useState } from 'react';

export interface SettingsSectionViewModelProps {
  state: string;
}

export function SettingsSectionViewModel() {
  const [state, setState] = useState('')

  return {
    state,
    setState
  }
}
