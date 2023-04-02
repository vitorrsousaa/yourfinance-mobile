import { Category } from '../Category';
import { Modality } from '../Modality';

export interface Transaction {
  _id: string;
  __v: 0;
  user: string;
  modality: Modality;
  description: string;
  amount: number;
  category: Category;
  type: string;
  date: string;
  updatedAt: string;
}
