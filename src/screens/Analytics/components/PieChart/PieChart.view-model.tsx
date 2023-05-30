import { useCallback, useState } from 'react';

import useBiggestModalities from '../../../../hooks/entities/useBiggestModalities';

type OptionChart = {
  amount: number;
  name: string;
  background: string;
};

type OptionMonthChart = {
  label: string;
  month: number;
  selected: boolean;
};

export interface PieChartViewModelProps {
  hasError: boolean;
  isLoading: boolean;
  colors: string[];
  setSelectedPeriod: (period: number) => void;
  getBiggestModality: () => Omit<OptionChart, 'background'>[];
  getLabelChart: () => Omit<OptionChart, 'amount'>[];
  getMonthOptions: () => OptionMonthChart[];
}

export function PieChartViewModel() {
  const [selectedPeriod, setSelectedPeriod] = useState(0);

  const colors = ['#0D2535', '#5388D8', '#F4BE37', '#FF9F40', '#72E485'];

  const {
    biggestModalities,
    hasErrorBiggestModalities,
    isLoadingBiggestModalities,
  } = useBiggestModalities();

  const getMonth = useCallback(() => {
    const now = new Date();

    return Intl.DateTimeFormat('PT-BR', { month: 'long' })
      .format(now)
      .replace(/^\w/, (letra) => letra.toUpperCase());
  }, []);

  const getMonthOptions = useCallback((): OptionMonthChart[] => {
    return [
      {
        label: getMonth(),
        month: 0,
        selected: 0 === selectedPeriod,
      },
      {
        label: 'Trimestral',
        month: 3,
        selected: 3 === selectedPeriod,
      },
      {
        label: 'Semestral',
        month: 6,
        selected: 6 === selectedPeriod,
      },
      {
        label: 'Anual',
        month: 12,
        selected: 12 === selectedPeriod,
      },
    ];
  }, [selectedPeriod]);

  const getBiggestModality = useCallback(():
    | Omit<OptionChart, 'background'>[]
    | undefined => {
    const biggest = biggestModalities && biggestModalities[selectedPeriod];

    const data = biggest?.map((big) => {
      return {
        name: big.name,
        amount: big.amount,
      };
    });

    return data;
  }, [selectedPeriod, biggestModalities]);

  const getLabelChart = useCallback(():
    | Omit<OptionChart, 'amount'>[]
    | undefined => {
    const biggest = biggestModalities && biggestModalities[selectedPeriod];

    const data = biggest?.map((big, index) => {
      return {
        name: big.name,
        background: colors[index],
      };
    });

    return data;
  }, [selectedPeriod, biggestModalities]);

  return {
    hasError: hasErrorBiggestModalities,
    isLoading: isLoadingBiggestModalities,
    colors,
    setSelectedPeriod,
    getBiggestModality,
    getLabelChart,
    getMonthOptions,
  };
}
