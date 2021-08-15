import useSWR, { SWRConfiguration } from 'swr';

import http from '../../lib/api';
import { Curation } from '../../types';

interface GetCurations {
  curations: Curation[];
}

interface GetCuration {
  curation: Curation;
}

export const useGetCurations = () => {
  const { data, error } = useSWR('/curation', (url) => http.get<GetCurations>(url));

  return { data: data?.curations, error };
};

export const useGetCuration = (curationId: number, config?: SWRConfiguration) => {
  const { data, error } = useSWR<GetCuration>(`/curation/${curationId}`, http.get, config);

  return { data: data?.curation, error };
};
