import { TCategory } from '../Category';
import { TModality } from '../Modality';

export interface TTransaction {
  id: string;
  description: string;
  amount: number;
  modality: TModality;
  category: TCategory;
  type: string;
  date: Date;
  updatedAt: Date;
  createdAt: Date;
}
