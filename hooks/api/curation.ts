import useSWR from "swr";
import http from "../../lib/api";
import { ICuration } from "../../types";

interface GetCuration {
  curations: ICuration[];
}

export const useGetCuration = () => {
  const { data, error } = useSWR("/curation", (url) => http.get<GetCuration>(url));
  return { data: data?.curations, error };
};
