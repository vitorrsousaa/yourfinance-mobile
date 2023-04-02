import { TransactionResponse } from '../../types/Transaction';
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
      return this.httpClient.get<TransactionResponse>(`/?page=${page}`);
    }

    return this.httpClient.get<TransactionResponse>('/');
  }
}

export default new TransactionsService();
