import { Transaction } from './Transaction';

export interface TransactionResponse {
  transactions: Transaction[];
  itemsPerPage: number;
  totalItems: number;
}
