import {
  TCardSummary,
  TCardSummaryPersistance,
} from '../../../../types/Analytics';

export interface ICardSummaryMapper {
  toDomain(cardSummary: TCardSummaryPersistance): TCardSummary;
}
