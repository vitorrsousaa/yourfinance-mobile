import { TModality } from '../Modality';

type Biggest = Omit<TModality, 'category'> & { amount: number };

export type TBiggestModality = {
  [key: string]: Biggest[];
};
