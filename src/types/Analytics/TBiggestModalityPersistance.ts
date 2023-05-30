import { TModality } from '../Modality';

type Biggest = Omit<TModality, ''> & { amount: number };

export type TBiggestModalityPersistance = {
  [key: string]: { modality: Biggest[] };
};
