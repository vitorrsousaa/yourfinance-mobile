import Icon from '../../components/Icons';
import { TTransaction } from '../../types/Transaction';

export interface DetailsTransactionViewModelProps {
  params: TTransaction;
  getIcon: (category: string) => JSX.Element;
}

export function DetailsTransactionViewModel(params: TTransaction) {
  function getIcon(category: string) {
    if (category === 'Receitas') {
      return <Icon name="income" testID="income-icon" />;
    }
    return <Icon name="outcome" testID="outcome-icon" />;
  }
  return { params, getIcon };
}
