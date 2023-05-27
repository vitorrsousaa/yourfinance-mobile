import {
  TTransaction,
  TTransactionCreate,
  TTransactionCreatePersistance,
} from '../../../types/Transaction';
import { TTransactionPersistance } from '../../../types/Transaction';

import { ITransactionMapper } from './ITransactionMapper';

class TransactionMapper implements ITransactionMapper {
  toPersistance(
    transaction: TTransactionCreate
  ): TTransactionCreatePersistance {
    return {
      amount: transaction.amount,
      categoryId: transaction.category,
      date: transaction.date,
      modalityId: transaction.modality,
      name: transaction.description,
    };
  }

  toDomain(transaction: TTransactionPersistance): TTransaction {
    return {
      amount: transaction.amount,
      category: {
        id: transaction.Category.id,
        name: transaction.Category.name,
      },
      createdAt: transaction.createdAt,
      date: transaction.date,
      description: transaction.name,
      id: transaction.id,
      modality: {
        category: transaction.Modality.categoryId,
        id: transaction.Modality.id,
        name: transaction.Modality.name,
      },
      type: transaction.type,
      updatedAt: transaction.updatedAt,
    };
  }
}

export default new TransactionMapper();
