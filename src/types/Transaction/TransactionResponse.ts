import { TTransaction } from './Transaction';

export interface TTransactionResponse {
  transactions: TTransaction[];
  itemsPerPage: number;
  totalItems: number;
}
