import useSWR from "swr";
import http from "../lib/api";
import { ICuration } from "../types";

export const useGetCuration = () => {
  const { data, error } = useSWR("/curation", (url) => http.get<{ curations: ICuration[] }>(url));
  return { data: data?.curations, error };
};
