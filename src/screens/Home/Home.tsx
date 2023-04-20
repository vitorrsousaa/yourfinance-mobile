import { memo, useEffect } from 'react';

import { HomeView } from './Home.view';
import { HomeViewModel } from './Home.view-model';
import AnalyticsService from '../../service/AnalyticsService';
import { useCategories } from '../../hooks/useCategories';

export interface HomeProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface HomeViewProps extends Omit<HomeProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Home(props: HomeProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  const { setIncomeSummary, setOutcomeSummary, setIsLoading, setHasError } =
    viewModel;

  const { categories } = useCategories();

  console.log('Alterar o carregamento da página Home para React Query');

  useEffect(() => {
    async function loadData() {
      try {
        const [dataOutcome, dataIncome] = await Promise.all([
          AnalyticsService.getCardsSummary(categories[0]._id),
          AnalyticsService.getCardsSummary(categories[1]._id),
        ]);

        setIncomeSummary(dataIncome);
        setOutcomeSummary(dataOutcome);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    if (categories) {
      loadData();
    }
  }, [categories]);

  return <HomeView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = HomeViewModel();

  return viewModel;
}

export default memo(Home);
