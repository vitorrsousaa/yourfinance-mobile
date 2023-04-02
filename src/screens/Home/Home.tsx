import { memo, useEffect } from 'react';

import { HomeView } from './Home.view';
import { HomeViewModel } from './Home.view-model';
import CategoriesService from '../../service/CategoriesService';
import { categories } from '../../mock/categories';
import TransactionsService from '../../service/TransactionsService';
import AnalyticsService from '../../service/AnalyticsService';

export interface HomeProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface HomeViewProps extends Omit<HomeProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Home(props: HomeProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  const { setTransactions, setIncomeSummary, setOutcomeSummary } = viewModel;

  useEffect(() => {
    async function loadData() {
      const [dataTransactions, dataOutcome, dataIncome] = await Promise.all([
        TransactionsService.list(),
        AnalyticsService.getCardsSummary(categories[0]?._id),
        AnalyticsService.getCardsSummary(categories[1]?._id),
      ]);

      // console.log(dataOutcome);

      setTransactions(dataTransactions.transactions.slice(0, 5));
      // setIncomeSummary(dataIncome);
      // setOutcomeSummary(dataOutcome);
    }

    loadData();
  }, []);

  return <HomeView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = HomeViewModel();

  return viewModel;
}

export default memo(Home);
