import { memo, useEffect } from 'react';

import { useCategories } from '../../hooks/useCategories';

import { HomeView } from './Home.view';
import { HomeViewModel } from './Home.view-model';

export interface HomeProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface HomeViewProps extends Omit<HomeProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Home(props: HomeProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  const { loadSummary } = viewModel;

  const { categories } = useCategories();

  console.log('Alterar o carregamento da página Home para React Query');

  useEffect(() => {
    if (categories) {
      loadSummary();
    }
  }, [categories]);

  return <HomeView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = HomeViewModel();

  return viewModel;
}

export default memo(Home);
