import useSWR from "swr";
import http from "../../lib/api";
import { IRestaurant } from "../../types";

export const useGetRestaurant = () => {
  const { data, error } = useSWR("/restaurant", (url) => http.get<{ restaurants: IRestaurant[] }>(url));
  return { data: data?.restaurants, error };
};
