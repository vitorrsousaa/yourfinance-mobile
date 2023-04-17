import { TCategory } from '../Category';
import { TModality } from '../Modality';

export interface TTransaction {
  _id: string;
  __v: 0;
  user: string;
  modality: TModality;
  description: string;
  amount: number;
  category: TCategory;
  type: string;
  date: string;
  updatedAt: string;
}
