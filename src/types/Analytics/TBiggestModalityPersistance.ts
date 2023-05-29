import { TModality } from '../Modality';

export type TBiggestModalityPersistance = {
  [key: string]: { modality: TModality[] };
};
