/* eslint-disable indent */
import { useEffect, useState } from 'react';
import { useQueries } from '@tanstack/react-query';

import useCategories from '../../../hooks/useCategories';
import AnalyticsService from '../../../service/AnalyticsService';
import { TCardSummary } from '../../../types/Analytics';

export default function useCardSummaries(): {
  isErrorSummaries: boolean;
  isLoadingSummaries: boolean;
  summaries: TCardSummary[];
} {
  const { categories, isLoadingCategories, isErrorCategories } =
    useCategories();
  const [summaries, setSummaries] = useState<TCardSummary[]>([]);

  const [income, outcome] = useQueries({
    queries: [
      {
        queryKey: ['@income', categories],
        queryFn: () => AnalyticsService.getCardsSummary(categories[0].id),
        enabled: Boolean(categories.length > 1),
      },
      {
        queryKey: ['@outcome', categories],
        queryFn: () => AnalyticsService.getCardsSummary(categories[1].id),
        enabled: Boolean(categories.length > 1),
      },
    ],
  });

  useEffect(() => {
    if (income.data && outcome.data) {
      setSummaries([income.data, outcome.data]);
    }
  }, [income.data, outcome.data]);

  return {
    isErrorSummaries: isErrorCategories || income.isError || outcome.isError,
    isLoadingSummaries:
      isLoadingCategories || income.isLoading || outcome.isLoading,
    summaries,
  };
}
