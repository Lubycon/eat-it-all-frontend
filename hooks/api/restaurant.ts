import useSWR from 'swr';

import http from '../../lib/api';
import { Restaurant } from '../../types';

interface GetRestaurants {
  restaurants: Restaurant[];
}

interface GetRestaurant {
  restaurant: Restaurant;
}

export const useGetRestaurants = () => {
  const { data, error } = useSWR('/restaurant', (url) => http.get<GetRestaurants>(url));

  return { data: data?.restaurants, error };
};

export const useGetRestaurant = (id: number) => {
  const { data, error } = useSWR(`/restaurant/${id}`, (url) => http.get<GetRestaurant>(url));

  return { data: data?.restaurant, error };
};
