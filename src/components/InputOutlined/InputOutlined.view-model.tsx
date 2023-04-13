import { useState } from 'react';

export interface InputViewModelProps {
  isFocus: boolean;
  handleFocusInput: () => void;
  handleBlurInput: () => void;
}

export function InputOutlinedViewModel() {
  const [isFocus, setIsFocus] = useState(false);

  function handleFocusInput() {
    setIsFocus(true);
  }

  function handleBlurInput() {
    setIsFocus(false);
  }

  return {
    isFocus,
    handleFocusInput,
    handleBlurInput,
  };
}
