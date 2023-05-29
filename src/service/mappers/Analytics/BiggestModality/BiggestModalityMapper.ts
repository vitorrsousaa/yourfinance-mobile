import {
  TBiggestModality,
  TBiggestModalityPersistance,
} from '../../../../types/Analytics';

import { IBiggestModalityMapper } from './IBiggestModalityMapper';

class BiggestModalityMapper implements IBiggestModalityMapper {
  toDomain(biggest: TBiggestModalityPersistance): TBiggestModality {
    return {
      '0': { modality: biggest[0].modality },
      '3': { modality: biggest[3].modality },
      '6': { modality: biggest[6].modality },
      '12': { modality: biggest[12].modality },
    };
  }
}

export default new BiggestModalityMapper();
