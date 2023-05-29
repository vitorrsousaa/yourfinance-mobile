import {
  TBiggestModality,
  TBiggestModalityPersistance,
} from '../../../../types/Analytics';

import { IBiggestModalityMapper } from './IBiggestModalityMapper';

class BiggestModalityMapper implements IBiggestModalityMapper {
  toDomain(biggest: TBiggestModalityPersistance): TBiggestModality {
    return {
      '0': biggest[0].modality,
      '3': biggest[3].modality,
      '6': biggest[6].modality,
      '12': biggest[12].modality,
    };
  }
}

export default new BiggestModalityMapper();
