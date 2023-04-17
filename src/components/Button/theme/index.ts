import theme from '../../../assets/theme';
import { ButtonVariants } from './types';

const border = 'solid 2px';

const buttonVariants: ButtonVariants = {
  primary: {
    initial: {
      background: theme.colors.green[400],
      color: theme.colors.black[900],
      border: 'none',
    },
    loading: {
      background: theme.colors.green[400],
      color: theme.colors.black[900],
      border: 'none',
    },
    disabled: {
      background: theme.colors.black[200],
      color: theme.colors.black[600],
      border: `${border} ${theme.colors.black[300]}`,
    },
  },
  secondary: {
    initial: {
      background: theme.colors.white[100],
      color: theme.colors.green[400],
      border: `${border} ${theme.colors.green[400]}`,
    },
    loading: {
      background: theme.colors.white[100],
      color: theme.colors.green[300],
      border: `${border} ${theme.colors.green[300]}`,
    },
    disabled: {
      background: theme.colors.white[100],
      color: theme.colors.black[200],
      border: `${border} ${theme.colors.black[200]}`,
    },
  },
  empty: {
    initial: {
      background: 'transparent',
      color: theme.colors.black[600],
      border: 'none',
    },
    loading: {
      background: 'transparent',
      color: theme.colors.black[700],
      border: 'none',
    },
    disabled: {
      background: 'transparent',
      color: theme.colors.black[200],
      border: 'none',
    },
  },
  danger: {
    initial: {
      background: theme.colors.red[400],
      color: theme.colors.white[100],
      border: `${border} ${theme.colors.red[400]}`,
    },
    loading: {
      background: theme.colors.red[400],
      color: theme.colors.white[100],
      border: 'none',
    },
    disabled: {
      background: 'transparent',
      color: theme.colors.black[200],
      border: `${border} ${theme.colors.black[200]}`,
    },
  },
};

export default buttonVariants;
