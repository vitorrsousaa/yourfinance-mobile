import { TTransactionResponse } from '../../types/Transaction';
import HttpClient from '../HttpClient';

class TransactionsService {
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
}

export default new TransactionsService();
