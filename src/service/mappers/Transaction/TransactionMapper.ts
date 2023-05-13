import {
  TTransaction,
  TTransactionCreate,
  TTransactionCreatePersistance,
} from '../../../types/Transaction';
import { TTransactionPersistance } from '../../../types/Transaction/Transaction';

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
      category: transaction.categoryId,
      createdAt: transaction.createdAt,
      date: transaction.date,
      description: transaction.name,
      id: transaction.id,
      modality: transaction.modalityId,
      type: transaction.type,
      updatedAt: transaction.updatedAt,
      user: transaction.userId,
    };
  }
}

export default new TransactionMapper();
