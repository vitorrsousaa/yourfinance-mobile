import {
  TTransactionCreate,
  TTransactionPersistance,
  TTransactionResponse,
} from '../../types/Transaction';
import HttpClient from '../HttpClient';
import TransactionMapper from '../mappers/Transaction';

import { ITransactionsService } from './ITransactionsService';

class TransactionsService implements ITransactionsService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async list() {
    const transactionsResponse =
      await this.httpClient.get<TTransactionResponse>('/transactions');

    const transactionsDomain = transactionsResponse.transactions.map(
      TransactionMapper.toDomain
    );

    return transactionsDomain;
  }

  async create(transaction: TTransactionCreate) {
    const transactionPersistance = TransactionMapper.toPersistance(transaction);

    const response = await this.httpClient.post<TTransactionPersistance>(
      '/transactions',
      transactionPersistance
    );

    return TransactionMapper.toDomain(response);
  }

  async createFixed(transaction: any) {
    const response = await this.httpClient.post('/infoFixed', transaction);

    return response;
  }
}

export default new TransactionsService();
