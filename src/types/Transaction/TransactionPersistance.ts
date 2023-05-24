export interface TTransactionPersistance {
  id: string;
  userId: string;
  name: string;
  amount: number;
  Modality: {
    categoryId: string;
    id: string;
    name: string;
  };
  Category: {
    id: string;
    name: string;
  };
  modalityId: string;
  categoryId: string;
  type: string;
  date: Date;
  updatedAt: Date;
  createdAt: Date;
}
