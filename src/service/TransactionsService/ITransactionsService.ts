import { TTransaction, TTransactionCreate } from '../../types/Transaction';

export interface ITransactionsService {
  list(): Promise<TTransaction[]>;
  create(transaction: TTransactionCreate): Promise<TTransaction>;
  delete(id: string): Promise<void>;
}
