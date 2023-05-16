import {
  TTransactionCreate,
  TTransactionResponse,
} from '../../types/Transaction';
import { TTransactionPersistance } from '../../types/Transaction/Transaction';
import HttpClient from '../HttpClient';
import TransactionMapper from '../mappers/Transaction';

import { ITransactionsService } from './ITransactionsService';

class TransactionsService implements ITransactionsService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async list(page?: number) {
    if (page) {
      return this.httpClient.get<TTransactionResponse>(
        `/transactions/?page=${page}`
      );
    }

    return this.httpClient.get<TTransactionResponse>('/transactions');
  }

  async create(transaction: TTransactionCreate) {
    const transactionPersistance = TransactionMapper.toPersistance(transaction);

    const response = await this.httpClient.post<TTransactionPersistance>(
      '/transactions',
      transactionPersistance
    );

    return TransactionMapper.toDomain(response);
  }
}

export default new TransactionsService();
