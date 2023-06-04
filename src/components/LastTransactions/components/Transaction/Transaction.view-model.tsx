import { useTheme } from 'styled-components/native';

import Icon from '../../../Icons';

export interface TransactionViewModelProps {
  getColor: (name: string) => string;
  getIcon: (category: string) => JSX.Element;
}

export function TransactionViewModel() {
  const { colors } = useTheme();

  function getColor(name: string) {
    if (name === 'Receitas') {
      return colors.green[400];
    } else {
      return colors.red[400];
    }
  }

  function getIcon(category: string) {
    if (category === 'Receitas') {
      return <Icon name="income" testID="income-icon" />;
    }
    return <Icon name="outcome" testID="outcome-icon" />;
  }
  return { getColor, getIcon };
}
