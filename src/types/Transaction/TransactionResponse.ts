import { TTransactionPersistance } from './TransactionPersistance';

export interface TTransactionResponse {
  transactions: TTransactionPersistance[];
  itemsPerPage: number;
  totalItems: number;
}
