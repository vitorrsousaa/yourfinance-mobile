import {
  TBiggestModality,
  TBiggestModalityPersistance,
} from '../../../../types/Analytics';

export interface IBiggestModalityMapper {
  toDomain(modality: TBiggestModalityPersistance): TBiggestModality;
}
