import useSWR, { SWRConfiguration } from 'swr';

import { Curation } from '../../types';

interface GetCurations {
  curations: Curation[];
}

interface GetCuration {
  curation: Curation;
}

export const useGetCurations = (config?: SWRConfiguration) => {
  const { data, error } = useSWR<GetCurations>('/curation', config);

  return { data: data?.curations, error };
};

export const useGetCuration = (curationId: number, config?: SWRConfiguration) => {
  const { data, error } = useSWR<GetCuration>(`/curation/${curationId}`, config);

  return { data: data?.curation, error };
};
