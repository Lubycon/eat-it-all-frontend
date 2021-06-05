import useSWR from "swr";
import { client } from "../lib/api";
import { ICuration } from "../types";

export const useGetCuration = () => {
  const { data, error } = useSWR("/curation", (url) => client.get(url));

  const curationList: ICuration[] = data?.data.data.curations;

  return { data: curationList, error };
};
