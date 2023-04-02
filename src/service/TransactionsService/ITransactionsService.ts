import { TransactionResponse } from '../../types/Transaction';

export interface ITransactionsService {
  list(page?: number): Promise<TransactionResponse>;
}
