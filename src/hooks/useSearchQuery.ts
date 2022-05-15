import { useQuery } from 'react-query';
import { fetchData } from '@services/api';

export const useSearchQuery = (keyword: string, page: number) => {
  const query = useQuery(['get', keyword, page], () => fetchData(keyword, page), { staleTime: 0 });

  return query;
};
