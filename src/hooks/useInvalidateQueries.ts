import { useQueryClient } from '@tanstack/react-query';

import invalidateQueries from '../utils/invalidateQueries';

export type Entities =
  | '@transactions'
  | '@income'
  | '@outcome'
  | '@biggestModalities';

export default function useInvalidateQueries() {
  const queryClient = useQueryClient();

  return function invalidate(params: Entities[]) {
    queryClient.invalidateQueries({
      predicate: invalidateQueries(params),
    });
  };
}
