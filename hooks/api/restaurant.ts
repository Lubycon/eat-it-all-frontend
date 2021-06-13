import useSWR from "swr";
import http from "../../lib/api";
import { IRestaurant } from "../../types";

interface GetRestaurant {
  restaurants: IRestaurant[];
}

export const useGetRestaurant = () => {
  const { data, error } = useSWR("/restaurant", (url) => http.get<GetRestaurant>(url));
  return { data: data?.restaurants, error };
};
