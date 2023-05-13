import { TCategory } from '../Category';
import { TModality } from '../Modality';

export interface TTransaction {
  id: string;
  user: string;
  modality: TModality;
  description: string;
  amount: number;
  category: TCategory;
  type: string;
  date: Date;
  updatedAt: Date;
  createdAt: Date;
}

export interface TTransactionPersistance {
  id: string;
  userId: string;
  modalityId: TModality;
  name: string;
  amount: number;
  categoryId: TCategory;
  type: string;
  date: Date;
  updatedAt: Date;
  createdAt: Date;
}
