import {
  TCardSummary,
  TCardSummaryPersistance,
} from '../../../../types/Analytics';

import { ICardSummaryMapper } from './ICardSummaryMapper';

class CardSummaryMapper implements ICardSummaryMapper {
  toDomain(cardSummary: TCardSummaryPersistance): TCardSummary {
    return {
      category: cardSummary.category.name,
      currentMonth: cardSummary.currentMonth,
      difference: cardSummary.difference,
      lastMonth: cardSummary.lastMonth,
      percent: cardSummary.percent,
    };
  }
}

export default new CardSummaryMapper();
