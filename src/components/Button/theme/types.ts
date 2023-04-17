type ButtonTheme = {
  initial: {
    background: string;
    color: string;
    border: string;
  };
  loading: {
    background: string;
    color: string;
    border: string;
  };
  disabled: {
    background: string;
    color: string;
    border: string;
  };
};

export type ButtonVariants = {
  primary: ButtonTheme;
  secondary: ButtonTheme;
  empty: ButtonTheme;
  danger: ButtonTheme;
};
