export interface TTransactionCreate {
  modality: string;
  description: string;
  amount: number;
  category: string;
  date: Date;
}

export interface TTransactionCreatePersistance {
  name: string;
  categoryId: string;
  modalityId: string;
  amount: number;
  date: Date;
}
