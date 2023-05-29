import { TModality } from '../Modality';

export type TBiggestModality = {
  [key: string]: { modality: Omit<TModality[], 'category'> };
};
