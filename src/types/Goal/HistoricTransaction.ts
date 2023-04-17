import { TModeTransaction } from './modeTransaction';

export interface THistoricTransaction {
  _id: string;
  date: string;
  amount: number;
  modeTransaction: TModeTransaction;
}
