import {
  TTransactionCreate,
  TTransactionCreatePersistance,
} from '../../../types/Transaction';

export interface ITransactionMapper {
  toPersistance(transaction: TTransactionCreate): TTransactionCreatePersistance;
}
