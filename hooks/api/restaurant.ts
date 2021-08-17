import useSWR, { SWRConfiguration } from 'swr';

import { Restaurant } from '../../types';

interface GetRestaurants {
  restaurants: Restaurant[];
}

interface GetRestaurant {
  restaurant: Restaurant;
}

export const useGetRestaurants = (config?: SWRConfiguration) => {
  const { data, error } = useSWR<GetRestaurants>('/restaurant', config);

  return { data: data?.restaurants, error };
};

export const useGetRestaurant = (id: number, config?: SWRConfiguration) => {
  const { data, error } = useSWR<GetRestaurant>(`/restaurant/${id}`, config);

  return { data: data?.restaurant, error };
};
