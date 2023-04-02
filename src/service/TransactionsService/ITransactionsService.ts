import { TTransactionResponse } from '../../types/Transaction';

export interface ITransactionsService {
  list(page?: number): Promise<TTransactionResponse>;
}
