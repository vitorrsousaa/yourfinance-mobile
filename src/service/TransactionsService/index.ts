import { TTransactionResponse } from '../../types/Transaction';
import HttpClient from '../HttpClient';

class TransactionsService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient(
      'http://192.168.0.105:3001/api/transactions'
    );
  }

  async list(page?: number) {
    if (page) {
      return this.httpClient.get<TTransactionResponse>(`/?page=${page}`);
    }

    return this.httpClient.get<TTransactionResponse>('/');
  }
}

export default new TransactionsService();
