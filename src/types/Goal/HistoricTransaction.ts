export interface THistoricTransaction {
  _id: string;
  date: string;
  amount: number;
  modeTransaction: 'MORE' | 'LESS';
}
