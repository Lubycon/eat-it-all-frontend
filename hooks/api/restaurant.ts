import useSWR from "swr";
import http from "../../lib/api";
import { Restaurant } from "../../types";

interface GetRestaurant {
  restaurants: Restaurant[];
}

export const useGetRestaurants = () => {
  const { data, error } = useSWR("/restaurant", (url) => http.get<GetRestaurant>(url));
  return { data: data?.restaurants, error };
};
