/* eslint-disable indent */
import { useCallback, useEffect, useState } from 'react';
import { useQueries } from '@tanstack/react-query';

import AnalyticsService from '../../service/AnalyticsService';
import { TCardSummary } from '../../types/Analytics';
import useCategories from '../useCategories';

export default function useCardSummaries(): {
  isErrorSummaries: boolean;
  isLoadingSummaries: boolean;
  summaries: TCardSummary[];
  refetch: () => Promise<void>;
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

  const refetch = useCallback(async () => {
    income.refetch();
    outcome.refetch();
  }, []);

  return {
    isErrorSummaries: isErrorCategories || income.isError || outcome.isError,
    isLoadingSummaries:
      isLoadingCategories || income.isLoading || outcome.isLoading,
    summaries,
    refetch,
  };
}
