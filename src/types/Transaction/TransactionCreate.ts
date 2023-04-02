export interface TransactionCreate {
  modality: string;
  description: string;
  amount: number;
  category: string;
  type: string;
  date: string;
  // eslint-disable-next-line semi
}
