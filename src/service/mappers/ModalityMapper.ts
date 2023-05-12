import { TModality, TModalityResponse } from '../../types/Modality';

class ModalityMapper {
  toDomain(modality: TModalityResponse): TModality {
    return {
      category: modality.categoryId,
      id: modality.id,
      name: modality.name,
    };
  }
}

export default new ModalityMapper();
