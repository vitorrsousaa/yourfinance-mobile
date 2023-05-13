import {
  TTransaction,
  TTransactionCreate,
  TTransactionResponse,
} from '../../types/Transaction';

export interface ITransactionsService {
  list(page?: number): Promise<TTransactionResponse>;
  create(transaction: TTransactionCreate): Promise<TTransaction>;
}
