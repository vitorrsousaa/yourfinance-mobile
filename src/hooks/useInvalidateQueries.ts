import { useQueryClient } from '@tanstack/react-query';

import invalidateQueries from '../utils/invalidateQueries';

export type Entities =
  | '@transactions'
  | '@income'
  | '@outcome'
  | '@biggestModalities';

export default function useInvalidateQueries(params: Entities[]) {
  const queryClient = useQueryClient();

  function invalidate() {
    queryClient.invalidateQueries({
      predicate: invalidateQueries(params),
    });
  }

  return invalidate;
}
