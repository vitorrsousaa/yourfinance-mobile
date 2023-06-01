import { Query, QueryKey } from '@tanstack/react-query';

export default function invalidateQueries(queries: string[]) {
  return ({ queryKey }: Query<unknown, unknown, unknown, QueryKey>) => {
    return queries.includes(queryKey[0] as string);
  };
}
