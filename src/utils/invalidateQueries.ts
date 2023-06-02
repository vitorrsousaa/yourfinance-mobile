import { Query, QueryKey } from '@tanstack/react-query';

type Entities = '@transactions' | '@income' | '@outcome' | '@biggestModalities';

export default function invalidateQueries(queries: Entities[]) {
  return ({ queryKey }: Query<unknown, unknown, unknown, QueryKey>) => {
    return queries.includes(queryKey[0] as Entities);
  };
}
