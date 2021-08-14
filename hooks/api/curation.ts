import useSWR from 'swr';

import http from '../../lib/api';
import { Curation } from '../../types';

export interface GetCurations {
  curations: Curation[];
}

interface GetCuration {
  curation: Curation;
}

export const useGetCurations = () => {
  const { data, error } = useSWR('/curation', (url) => http.get<GetCurations>(url));

  return { data: data?.curations, error };
};

export const useGetCuration = (curationId: number) => {
  const { data, error } = useSWR(`/curation/${curationId}`, (url) => http.get<GetCuration>(url));

  return { data: data?.curation, error };
};
